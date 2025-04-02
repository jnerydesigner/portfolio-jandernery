pipeline {
    agent any
    tools {
        nodejs 'NodeJS20' // Nome que você configurou no Jenkins
    }
    stages {
        stage('Check Node Version') {
            steps {
                script {
                    def nodeVersion = sh(script: 'node -v', returnStdout: true).trim()
                    echo "Node.js version: ${nodeVersion}"
                }
            }
        }
        stage("Instalando o Yarn"){
            steps {
                script {
                    sh 'npm -g install yarn'
                }
            }
        }
        stage("Deploy Se Liga Dev"){
            steps {
                script {
                    sh './deploy.sh'
                }
            }
        }
    }
}