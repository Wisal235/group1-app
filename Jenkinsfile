pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'CI=true npm test'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t group1-app .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker stop group1-app || true'
                sh 'docker rm group1-app || true'
                sh 'docker run -d -p 3000:3000 --name group1-app group1-app'
            }
        }
    }
}