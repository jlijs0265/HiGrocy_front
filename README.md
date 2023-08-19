<h1> Higrocy_project react 사용방법

1. 임시 path에 git clone을 받는다(ex. desktop/higrocy_front)
2. 본인이 vscode를 사용하여 코딩할 folder path로 들어가서 npx를 이용하여 react app기본을 설치한다.

   ```powershell
   npx creat-react-app "폴더명"
   ```
3. 2번에서 생성한 폴더내에 node_modules 폴더를 제외하고 삭제한다.
4. 1번에서 받은 폴더에 내부 파일을 2번에서 생성한 폴더로 이동한다. (❗숨겨진폴더 .git도 같이 이동해야함)
5. vscode에서 2번에서 생성한 폴더로 open Folder 한다.

   1. vscode 내에 git branch를 main -> developer로 변경되는것 확인
   2. terminal 에서 npm start 명령어 실행하여 react 실행되는지 확인
