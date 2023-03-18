# webpack-demo
webpack-demo





### webpack file-loader 명명규칙
use -> placeHolders 
[ext] : 문서의 확장자 추리
[name] : 문서의 이름
[hash] : 문서의 내용, MD4 함수처리를 통해 128hash value 생성 32개16진법
[contentHash] : 문서의 확장자 추리
[hash:<length>] : 캡쳐 hash 길이 디퍼트32
[path] : file 상대 webpack 설정의 경로


## 웹팩 플로그인 중요:
예: CleanWebpackPlugin
    npm i clean-webpack-plugin -D
## htmlWebpackPlugin:
예: HtmlWebpackPlugin
    npm i html-webpack-plugin -D