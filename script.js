// Estado da aplicação
let currentStep = 1;
const totalSteps = 3;
const answers = {};

// Elementos DOM
const progressSteps = document.querySelectorAll('.progress-step');
const stepContents = document.querySelectorAll('.step-content');
const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');
const optionBtns = document.querySelectorAll('.option-btn');

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
});

function initializeApp() {
    updateProgressBar();
    updateStepContent();
    updateNavigationButtons();
}

function setupEventListeners() {
    // Event listeners para botões de opção
    optionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            selectOption(this);
        });
    });

    // Event listeners para navegação
    backBtn.addEventListener('click', goToPreviousStep);
    nextBtn.addEventListener('click', goToNextStep);

    // Event listeners para teclado
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && nextBtn.style.display !== 'none' && !nextBtn.disabled) {
            goToNextStep();
        }
        if (e.key === 'Escape' && backBtn.style.display !== 'none') {
            goToPreviousStep();
        }
    });
}

function selectOption(button) {
    // Remove seleção anterior
    const currentStepElement = document.getElementById(`step${currentStep}`);
    const currentOptions = currentStepElement.querySelectorAll('.option-btn');
    currentOptions.forEach(btn => btn.classList.remove('selected'));

    // Adiciona seleção atual
    button.classList.add('selected');
    
    // Adiciona animação de feedback
    button.style.transform = 'scale(0.98)';
    setTimeout(() => {
        button.style.transform = '';
    }, 150);

    // Salva resposta
    const value = button.getAttribute('data-value');
    answers[`step${currentStep}`] = value;

    // Habilita botão próximo
    nextBtn.disabled = false;
    nextBtn.style.display = 'block';

    // Auto-avança após um pequeno delay para melhor UX
    setTimeout(() => {
        if (currentStep < totalSteps) {
            goToNextStep();
        } else {
            finishForm();
        }
    }, 800);
}

function goToNextStep() {
    if (currentStep < totalSteps) {
        // Marca step atual como completo
        progressSteps[currentStep - 1].classList.add('completed');
        progressSteps[currentStep - 1].classList.remove('active');
        
        currentStep++;
        
        // Ativa próximo step
        progressSteps[currentStep - 1].classList.add('active');
        
        updateStepContent();
        updateNavigationButtons();
        updateProgressBar();
        
        // Scroll suave para o topo
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        finishForm();
    }
}

function goToPreviousStep() {
    if (currentStep > 1) {
        // Remove estado do step atual
        progressSteps[currentStep - 1].classList.remove('active');
        
        currentStep--;
        
        // Volta para step anterior
        progressSteps[currentStep - 1].classList.remove('completed');
        progressSteps[currentStep - 1].classList.add('active');
        
        updateStepContent();
        updateNavigationButtons();
        updateProgressBar();
        
        // Scroll suave para o topo
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function updateStepContent() {
    stepContents.forEach((content, index) => {
        content.classList.remove('active');
        if (index === currentStep - 1) {
            content.classList.add('active');
        }
    });

    // Restaura seleção se existir
    const currentAnswer = answers[`step${currentStep}`];
    if (currentAnswer) {
        const currentStepElement = document.getElementById(`step${currentStep}`);
        const selectedOption = currentStepElement.querySelector(`[data-value="${currentAnswer}"]`);
        if (selectedOption) {
            selectedOption.classList.add('selected');
        }
    }
}

function updateNavigationButtons() {
    // Botão voltar
    if (currentStep > 1) {
        backBtn.style.display = 'block';
    } else {
        backBtn.style.display = 'none';
    }

    // Botão próximo
    const hasSelection = answers[`step${currentStep}`];
    if (hasSelection) {
        nextBtn.style.display = 'block';
        nextBtn.disabled = false;
    } else {
        nextBtn.style.display = 'none';
        nextBtn.disabled = true;
    }
}

function updateProgressBar() {
    progressSteps.forEach((step, index) => {
        const stepNumber = index + 1;
        
        if (stepNumber < currentStep) {
            step.classList.add('completed');
            step.classList.remove('active');
        } else if (stepNumber === currentStep) {
            step.classList.add('active');
            step.classList.remove('completed');
        } else {
            step.classList.remove('active', 'completed');
        }
    });
}

function finishForm() {
    // Mostra loading
    showLoading();
    
    // Simula processamento
    setTimeout(() => {
        // Redireciona para o site de rastreamento
        redirectToTracking();
    }, 2000);
}

function showLoading() {
    // Esconde navegação
    document.querySelector('.navigation').style.display = 'none';
    
    // Mostra loading
    stepContents.forEach(content => content.classList.remove('active'));
    document.getElementById('loading').classList.add('active');
    
    // Atualiza progress bar para mostrar conclusão
    progressSteps.forEach(step => {
        step.classList.add('completed');
        step.classList.remove('active');
    });
}

function redirectToTracking() {
    // Adiciona parâmetros baseados nas respostas (opcional)
    const params = new URLSearchParams();
    params.append('tipo', answers.step1 || 'nacional');
    params.append('idade', answers.step2 || 'sim');
    params.append('docs', answers.step3 || 'sim');
    
    // URL de redirecionamento
    const redirectUrl = 'https://localiza-encomendas.site/rastreio/';
    
    // Redireciona
    window.location.href = redirectUrl;
}

// Funções utilitárias
function addRippleEffect(element, event) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Adiciona efeito ripple aos botões
optionBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        addRippleEffect(this, e);
    });
});

// Prevenção de spam de cliques
let isProcessing = false;

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Aplica debounce aos botões de navegação
const debouncedNext = debounce(goToNextStep, 300);
const debouncedBack = debounce(goToPreviousStep, 300);

nextBtn.removeEventListener('click', goToNextStep);
backBtn.removeEventListener('click', goToPreviousStep);
nextBtn.addEventListener('click', debouncedNext);
backBtn.addEventListener('click', debouncedBack);

// Analytics e tracking (opcional)
function trackStep(step, answer) {
    // Aqui você pode adicionar código para analytics
    console.log(`Step ${step} completed with answer: ${answer}`);
    
    // Exemplo de envio para Google Analytics (se configurado)
    if (typeof gtag !== 'undefined') {
        gtag('event', 'form_step_completed', {
            'step_number': step,
            'step_answer': answer
        });
    }
}

// Atualiza tracking quando resposta é selecionada
const originalSelectOption = selectOption;
selectOption = function(button) {
    originalSelectOption.call(this, button);
    const value = button.getAttribute('data-value');
    trackStep(currentStep, value);
};

// Detecção de dispositivo móvel
function isMobile() {
    return window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Ajustes específicos para mobile
if (isMobile()) {
    document.body.classList.add('mobile');
    
    // Previne zoom em inputs no iOS
    document.addEventListener('touchstart', function() {}, { passive: true });
}

// Service Worker para cache (opcional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('SW registered: ', registration);
            })
            .catch(function(registrationError) {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Tratamento de erros
window.addEventListener('error', function(e) {
    console.error('Erro na aplicação:', e.error);
    // Aqui você pode enviar erros para um serviço de monitoramento
});

// Prevenção de saída acidental
window.addEventListener('beforeunload', function(e) {
    if (currentStep > 1 && currentStep <= totalSteps) {
        e.preventDefault();
        e.returnValue = 'Tem certeza que deseja sair? Seu progresso será perdido.';
        return e.returnValue;
    }
});

// Inicialização de acessibilidade
function initializeAccessibility() {
    // Adiciona atributos ARIA
    progressSteps.forEach((step, index) => {
        step.setAttribute('aria-label', `Etapa ${index + 1} de ${totalSteps}`);
    });
    
    optionBtns.forEach(btn => {
        btn.setAttribute('role', 'button');
        btn.setAttribute('tabindex', '0');
    });
    
    // Navegação por teclado para botões de opção
    optionBtns.forEach(btn => {
        btn.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}

// Inicializa acessibilidade quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', initializeAccessibility);
