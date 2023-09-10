export const pt = {
  PAGES: {
    LOGIN: {
      INPUT: {
        USER: 'Usuário',
        USER_PLACEHOLDER: 'Informe seu nome de usuário',
        PASSWORD: 'Senha',
        PASSWORD_PLACEHOLDER: 'Informe a senha',
      },
      BUTTON: {
        ENTER: 'Entrar',
        ENTER_WITHOUT_AUTH: 'Entrar sem logar',
        REGISTER: 'Fazer cadastro',
      },
      MODAL_ALERT: {
        HEADER: 'Você tem certeza?',
        CONTENT:
          'Caso você decida seguir sem se identificar, todas as suas ações (favoritos, buscas, etc) serão perdidas ao encerrar o app.\n\nTambém não será possível notificar quando um novo episódio for lançado!',
        CONFIRM_BUTTON: 'Aceito',
        CANCEL_BUTTON: 'Cancelar',
      },
    },
    REGISTER: {
      HEADER: 'Cadastro',
      INPUT: {
        USER: {
          LABEL: 'Usuário',
          PLACEHOLDER: 'Informe seu nome de usuário',
          REQUIRED: 'Este campo é obrigatório',
          MIN: 'É necessário mais que 4 caracteres',
        },
        PASSWORD: {
          LABEL: 'Senha',
          PLACEHOLDER: 'Informe a senha',
          REQUIRED: 'Este campo é obrigatório',
          MIN: 'É necessário mais que 4 caracteres',
          SIMILIRITY: 'As senhas informadas estão diferentes',
        },
        CONFIRM_PASSWORD: {
          LABEL: 'Confirmar senha',
          PLACEHOLDER: 'Confirme a senha',
          REQUIRED: 'Este campo é obrigatório',
          MIN: 'É necessário mais que 4 caracteres',
          SIMILIRITY: 'As senhas informadas estão diferentes',
        },
      },
      BUTTON: {
        GO_BACK: 'Voltar',
        SAVE: 'Salvar',
      },
    },
  },
  TAB_NAVIGATION: {
    HOME: 'Inicio',
    DISCOVERY: 'Explorar',
    FAVORITE: 'Favoritos',
  },
  FAB_GROUP: {
    HOME: {
      EDIT: 'Cadastro',
      LOGOUT: 'Sair',
    },
  },
};
