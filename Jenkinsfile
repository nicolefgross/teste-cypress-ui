pipeline {
    agent any

    stages {
        stage('Clonar repositório') {
            steps {
               git branch: 'main', url: 'https://github.com/nicolefgross/teste-cypress-ui.git'
            }
        }
        stage('Instalar dependências') {
            steps {
               bat 'npm install'
            }
        }
        stage('Executar testes') {
            steps {
               bat 'npm run cy:run'
            }
        }
    }
}