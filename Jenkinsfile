pipeline {
    agent any
    tools {
        nodejs 'NodeJS_22'
    }
    environment {
        PROJECT_NAME = 'jandernery-portfolio'
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
        stage('Deploy com PM2') {
            steps {
                script {
                    withCredentials([string(credentialsId: 'SSH_PASSWORD', variable: 'SSH_PASSWORD')]) {
                        sh """
                            sshpass -p '${SSH_PASSWORD}' ssh -o StrictHostKeyChecking=no root@deploy-server '
                                export PATH=/var/lib/jenkins/tools/jenkins.plugins.nodejs.tools.NodeJSInstallation/NodeJS_22/bin:$PATH

                                node -v
                                yarn -v

                                cd /var/lib/jenkins/workspace/PortfolioJanderNery

                                yarn install
                                yarn build

                                pm2 update ${env.PROJECT_NAME} || true
                                pm2 start ecosystem.config.js --only ${env.PROJECT_NAME} --update-env || pm2 restart ${env.PROJECT_NAME}
                            '
                        """
                    }
                }
            }
        }
    }
}