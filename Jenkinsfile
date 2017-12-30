
pipeline {
  agent any

  tools {nodejs "nodejs9"}

  stages {
      stage('Checkout'){

        steps{
          checkout scm
        }
      }
      stage('Install') {
          steps {
            withNPM( npmrcConfig: 'a1cc52ea-7022-4b88-8336-a439d1bd0976') {
              sh 'npm i';
            }
          }
      }

      stage('Build'){
        steps{
          sh 'npm run build'
        }
      }

      stage('Save executables'){
        steps{
          archiveArtifacts 'move-linux, move-win.exe, move-macos';
        }
      }


      stage('Cleanup'){
        steps{
          echo 'prune and cleanup'
          sh 'npm prune'
          sh 'rm node_modules -rf'
        }
      }
  }
}
