<h1> Higrocy_project react 사용방법 </h1>

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

---
TODO List
- ~~type script 사용(ts_cofig 설정)~~
- 기본 bootstrap으로만 사용
- Component 구성  
   ~~1. navbar - 동진~~
   ~~2. chart - 동진~~
   3. form -희진
   ~~4. table (상황에따라 여러 컴포넌트로 분기) - 희진~~
   ~~5. search bar(selector) - 희진~~
   6. spinner - 희진
   7. data input search bar - 희진
   ~~8. modal - 희진~~
   ~~9. pagination (back단과 연계구성) - 희진~~
   10. back단과 연계 구성될 부분 설정(rest controller)
   ~~11. request Mapping (url-pattern) route 구성~~
   12. css 파일 위치 정리
   ---

   여러 컨트롤러 통합작업
   - 기본 페이지 폴더로 함수화하여 만들어 놓기
   - 핵심 페이지 생각해보고 컴포넌트화 진행.
   - axois 통신으로 가져와야 할부분 아래에 따로 정리.

---

<h2>request Mapping </h2>  

- /login : 로그인 페이지(spring boot에서 어떻게 될지 봐야함.)
- /order : 발주신청 페이지
- /orderlist : 발주현황 페이지
- /pm : 기계 목록 페이지
- ~~/product : 생산품 페이지~~
- /production/requestList : 생산요청현황 페이지
- /process : 공정관리 페이지
- ~~/pr : 생산요청 페이지~~
- ~~/raw_material : 원자재 관리 페이지~~
- /storage : 창고 관리 페이지
- /wh : 입출고 현황 페이지
- ~~/* : Main 페이지 Chart이쪽으로 옮김~~