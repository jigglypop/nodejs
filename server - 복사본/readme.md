# TypeScript

# 프로젝트 생성하기

* 프로젝트 폴더를 만들고 npm init 을 사용해 package.json 을 생성

```
$ npm init
```

* TypeScript 컴파일은 tsc 라는 명령어를 사용

```
$ tsc --init
```

* 위와 같이 명령어를 입력하면 tsconfig.json 이라는 파일이 생성되는데 이것은 이 프로젝트가 TypeScript 프로젝트의 루트임을 나타낸다. `tsconfig.json` 파일은 프로젝트를 컴파일하는 데 필요한 루트 파일과 컴파일러 옵션을 지정한다.

```json
{
  “compilerOptions”: {
    “target”: “es5”
    “module”: “commonjs”
    “strict”: true
    “esModuleInterop”: true
  }
}
```

처음 생성된 tsconfig.json 파일은 몇개 빼고 전부 주석처리 되어있다. 여기서 주석처리 되어있는 것을 어떻게 사용하냐 에 달라진다

```json
{
  “compilerOptions”: {
    "lib": ["es5", "es6"],
    "target": "es5",
    "module": "commonjs",
    "moduleResolution": "node",
    "outDir": "./build",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "sourceMap": true
  },
  "exclude" : [ ],
  "include" : [ ]
}
```

“soucrMap” 을 true 로 설정 , “moduleResolution” : “node” 로 설정해준다. 그리고 exclude , include 는 typescript로 컴파일할때 파일을 필터링 한다.

* nodemon과 ts-node를 install 

```
$ npm install --save-dev nodemon ts-node 
```

설치를 하고 package.json의 script를 아래와같이 설정해준다.

```
“scripts”: {
  “start”: “nodemon — exec ts-node src/index.ts”
 }
```

이제 기본적인 설정은 다 끝났다.

# 사용하기

먼저 아래와 같이 express를 설치한다.

```
$ npm install @types/express
```

index.ts 파일을 만들고 아래와 같은 코드를 입력한다.

```
import * as express from "express"
class App {  
public application : express.Application;  
constructor(){
    this.application = express();
  }}
  const app = new App().application;
 app.get("/",(req : express.Request , res : express.Response) =>{
  res.send("start");
})app.listen(4000,()=>console.log("start"));
```

그리고 npm start 를 하면 바로 실행이 된다.!!



# typescript의 tsconfig.json 옵션

* module
  * 웹에서 동작 : amd
  * 노드제이에스에서 동작 : commonjs

#### 2) moduleResolution

* module이 commonjs이면 node
* module이 amd이면 classic

#### 3) target

* 트랜스파일할 대상 자바스크립트의 버전
* 대부분 es5

#### 4) baseUrl, outDir

* 디렉터리 설정

#### 6) esModuleInterop

* 

#### 7) sourceMap

* sourceMap 값이 true이면 트랜스파일 디렉터리에는 .js파일 이외에 js.map 파일이 만들어짐

#### 8) downlevelinteration

#### 9) nolmplicitAny

* 타입을 지정하지 않아도 문제로 인식하지 않음