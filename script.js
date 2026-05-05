/* ============================================
   VALIDAÇÃO DO FORMULÁRIO DE CONTATO
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {

    const formulario = document.getElementById('form-contato');

    formulario.addEventListener('submit', function(evento) {
        
        // Previne o envio padrão
        evento.preventDefault();

        // Captura os valores dos campos
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const assunto = document.getElementById('assunto').value;
        const mensagem = document.getElementById('mensagem').value.trim();

        // Captura os spans de erro
        const erroNome = document.getElementById('erro-nome');
        const erroEmail = document.getElementById('erro-email');
        const erroAssunto = document.getElementById('erro-assunto');
        const erroMensagem = document.getElementById('erro-mensagem');

        // Captura os campos para adicionar/remover classe de erro
        const campoNome = document.getElementById('nome');
        const campoEmail = document.getElementById('email');
        const campoAssunto = document.getElementById('assunto');
        const campoMensagem = document.getElementById('mensagem');

        // Limpa mensagens de erro anteriores
        erroNome.textContent = '';
        erroEmail.textContent = '';
        erroAssunto.textContent = '';
        erroMensagem.textContent = '';

        // Remove classes de erro anteriores
        campoNome.classList.remove('erro');
        campoEmail.classList.remove('erro');
        campoAssunto.classList.remove('erro');
        campoMensagem.classList.remove('erro');

        let formularioValido = true;

        // Validação do campo Nome
        if (nome === '') {
            erroNome.textContent = 'Por favor, preencha seu nome completo.';
            campoNome.classList.add('erro');
            formularioValido = false;
        } else if (nome.length < 3) {
            erroNome.textContent = 'O nome deve ter pelo menos 3 caracteres.';
            campoNome.classList.add('erro');
            formularioValido = false;
        }

        // Validação do campo E-mail
        if (email === '') {
            erroEmail.textContent = 'Por favor, informe seu e-mail.';
            campoEmail.classList.add('erro');
            formularioValido = false;
        } else {
            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regexEmail.test(email)) {
                erroEmail.textContent = 'Por favor, informe um e-mail válido.';
                campoEmail.classList.add('erro');
                formularioValido = false;
            }
        }

        // Validação do campo Assunto
        if (assunto === '') {
            erroAssunto.textContent = 'Por favor, selecione um assunto.';
            campoAssunto.classList.add('erro');
            formularioValido = false;
        }

        // Validação do campo Mensagem
        if (mensagem === '') {
            erroMensagem.textContent = 'Por favor, escreva sua mensagem.';
            campoMensagem.classList.add('erro');
            formularioValido = false;
        } else if (mensagem.length < 10) {
            erroMensagem.textContent = 'A mensagem deve ter pelo menos 10 caracteres.';
            campoMensagem.classList.add('erro');
            formularioValido = false;
        }

        // Se tudo estiver válido, simula o envio
        if (formularioValido) {
            alert('✅ Mensagem enviada com sucesso!\n\nObrigada, ' + nome + '! Entrarei em contato em breve.');

            console.log('Dados do formulário:', {
                nome: nome,
                email: email,
                assunto: assunto,
                mensagem: mensagem
            });

            // Limpa o formulário
            formulario.reset();
        }

    });

});