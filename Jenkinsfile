pipeline {
    agent any
    tools {
        nodejs 'NodeJS_22'
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
        stage("Verificar Instalações") {
            steps {
                sh 'which node'
                sh 'which yarn'
                sh 'which pm2'
            }
        }
        stage("Configurando Permissões"){
            steps {
                script {
                    sh 'sudo chown -R jenkins:jenkins /var/lib/jenkins/workspace/PortfolioJandernery'
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