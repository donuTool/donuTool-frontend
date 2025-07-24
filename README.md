# donuTool

<br>
<br>

![donuTool](/public/donuTool-main-picture.png)

<br>

<div align="center">

donuTool은 가벼우면서도 강력한 플로팅 툴바로, 커서를 자동으로 따라다니며,사용자가 원하는 순간에<br>바로 도구에 접근할 수 있도록 설계되었기에 화면을 옮겨 다니거나 메뉴를 찾느라 시간을 낭비할 필요가 없습니다.<br>필요한 도구를 ‘찾아가는’ 것이 아니라, 도구가 ‘사용자에게 찾아오는’ 경험을 제공합니다.<br>donuTool로 작업 흐름을 방해받지 않고, 필요한 도구를 바로 꺼내 쓸 수 있는 새로운 방식을 경험해 보세요.

</div>

<br>
<br>

# 목차

- [🔥 동기](#-동기)
- [📖 프리뷰](#-프리뷰)
- [📚 기술 스택](#-기술-스택)
- [🎯 기능](#-기능)
- [💻 개발](#-개발)
- [👌 사용자 경험](#-사용자-경험)
- [💥 트러블 슈팅](#-트러블-슈팅)
- [⚒️ 리팩토링](#️-리팩토링)
- [🗓️ 기간](#️-기간)
- [📝 소감](#-소감)

<br>
<br>

# 🔥 동기

이 프로젝트를 시작한 계기는 웹 브라우징을 하면서 늘 느꼈던 단순하지만 근본적인 질문에서 출발했습니다.

**_“화면을 가리지 않되 툴바를 대체할 수 있는 방법이 없을까?”_**

현대인의 일상에서 웹 브라우저는 필수적인 도구지만, 여전히 해결되지 않은 불편함이 있습니다. 브라우저 상단의 툴바는 뒤로가기, 새로고침, 탭 전환 등 핵심적인 기능을 제공하지만, 동시에 귀중한 화면 공간을 차지해 콘텐츠 영역을 제한합니다. 그러다 보니 사용자는 항상 **“넓은 화면에서 콘텐츠를 보고 싶다”** 는 욕구와 **“브라우저 기능은 반드시 필요하다”** 는 현실 사이에서 느끼게 되는 답답함이 불가피하다고 생각했습니다. 특히 작은 화면에서 작업하거나 장시간 웹서핑을 할 때 이 불편함은 더욱 크게 다가옵니다.
저희는 이 문제를 해결하기 위해 몇 가지 가설을 세웠습니다.

- 화면 공간을 차지하지 않으면서도 필요한 기능에 즉시 접근할 수 있을까?
- 기존 툴바의 장점은 유지하면서도, 더 자연스럽게 쓸 수 있는 방법은 없을까?
- 사용자의 작업 흐름을 방해하지 않고 브라우저 기능을 제공할 수 있을까?
- 브라우징 중 ‘마우스 커서’라는 이미 움직이고 있는 요소를 활용할 수는 없을까?

이 질문들을 따라가며, 저희는 한 가지 흥미로운 가능성에 도달했습니다.

**_“마우스 커서를 따라다니면서 소형 툴바는 어떨까?”_**

커서야말로 사용자가 웹페이지를 탐색하는 동안 자연스럽게 움직이는 요소이며, 평상시에는 보이지 않다가 필요한 순간에만 커서 주변에 나타날 수 있다는 장점이 있다고 생각했습니다. 플로팅 툴바를 활용하면, 화면 공간을 전혀 차지하지 않으면서도 뒤로가기나 탭 전환 같은 핵심 기능들을 손 닿는 곳에서 바로 사용할 수 있겠다는 확신이 들었습니다.
그러던 중 저는 웹 기술만으로도 마우스 커서의 위치를 실시간으로 추적하고, 이에 반응하는 인터페이스를 구현할 수 있다는 가능성을 확인했습니다. 이 기술을 접목한다면, 누구나 웹 브라우저에서 바로 사용할 수 있는 플로팅 툴바를 만들 수 있겠다는 아이디어로 발전하게 되었습니다.

<br>
<br>

# 📖 프리뷰

### 브라우저에 주입된 툴바 UI를 조작하는 영상

![donuTool-preview](/public/donuTool-preview.gif)

### 웹과 확장프로그램 스크린샷

![donuTool-screenshot](/public/donuTool-screenshot.png)

### ⚠️ 현재 아래 기능은 개발 중이며, 향후 업데이트에서 제공될 예정입니다:

- 대시보드: 주요 데이터 및 상태를 종합적으로 확인할 수 있는 화면
- 도움말: 사용자 가이드 및 자주 묻는 질문(FAQ) 등 지원 문서
- 계정: 사용자 계정에 저장되어 있는 정보 관리 및 초기화 기능을 제공하는 화면

<br>
<br>

# 📚 기술 스택

## Web & Extension

[![JavaScript](https://img.shields.io/badge/javascript-ECDC5A?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![TypeScript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![ManifestV3](https://img.shields.io/badge/manifest%20V3-EA4335?style=for-the-badge&logoColor=black)](https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3?hl=ko)
[![React](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=Tailwind%20CSS&logoColor=white)](https://tailwindcss.com/)
[![Chart.js](https://img.shields.io/badge/chart.js-FF6384?style=for-the-badge&logo=chart.js&logoColor=white)](https://www.chartjs.org/)
[![i18next](https://img.shields.io/badge/i18next-26A69A?style=for-the-badge&logo=i18next&logoColor=white)](https://www.i18next.com/)
[![Zustand](https://img.shields.io/badge/Zustand-FF7B00?style=for-the-badge&logoColor=white)](https://zustand-demo.pmnd.rs/)
[![Dnd-kit](https://img.shields.io/badge/dndkit-596CFF?style=for-the-badge&logoColor=white)](https://dndkit.com/)

## Server

[![Axios](https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/kr/docs/intro)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white)](https://www.mongodb.com/)

<br>
<br>

# 🎯 기능

## 🧩 확장프로그램

### 팝업 페이지

Chrome 웹스토어에서 설치한 뒤 실행하면 표시되는 확장프로그램 팝업 페이지입니다.

- 테마 토글 버튼
- 브라우저에 설정된 사용자 언어를 인식해 해당 언어에 맞는 텍스트 제공
- 로그인 페이지
  - 구글 OAuth를 활용한 로그인 기능
  - 해당 유저 정보에 저장된 데이터 불러오기 및 저장
  - 게스트 모드
- 메인 페이지
  - 전체화면(상단 도구막대 가리기) 토글 기능
  - 툴바 UI 실행 및 종료 기능
  - 로그아웃 기능
- 설정 페이지
  - 툴바 UI 내 버튼 세팅 드래그 앤 드롭 기능
  - 툴바 UI 내 사용할 수 있는 각종 기능 버튼 목록 제공
  - 새 탭 생성 버튼의 주소 커스텀 기능

### 툴바 UI

팝업 메인 페이지에서 실행 버튼을 클릭 시 페이지 DOM에 주입되는 UI입니다.

- 커서를 실시간으로 따라다니는 UI
- 페이지 DOM 내 요소를 감지하여 자동 UI 활성화/비활성화 기능
- 활성화 후 클릭 시에만 UI 위치 고정 및 드래그하여 버튼 인터랙션 기능
- 버튼 인터랙션 목록
  - 뒤로 / 앞으로 가기
  - 이전 / 다음 탭으로 가기
  - 새로고침
  - 새 탭 생성
  - 탭 닫기
  - 번역
  - 탭 북마크
  - 탭 내 모든 이미지 다운로드
  - 탭 인쇄
  - 탭 스크린샷
  - 탭 주소 복사

## 🌐 웹

확장프로그램 팝업 페이지에서 로그인하면, 해당 사용자 ID를 기반으로 열리는 개인화된 웹 페이지입니다.

- 대시보드 페이지
  - 사용자 설정, 활동 현황 등을 한눈에 확인할 수 있는 메인 화면
- 도움말 페이지
  - 서비스 이용 가이드, 자주 묻는 질문(FAQ), 사용 팁 제공
- 계정 페이지
  - 사용자 계정 정보 확인, 비밀번호 변경, 초기화 등 계정 관리 기능
- 통계 페이지
  - 도구 사용 기록, 클릭 횟수, 사용 시간 등의 데이터를 시각화하여 제공
- 설정 페이지
  - 도구의 레이아웃, 버튼 구성, 사용자 테마 설정 등 개인화 기능

<br>
<br>

# 💻 개발

## 1. 확장프로그램 manifest V3 구성

이 프로젝트는 Chrome 확장프로그램의 최신 스펙인 `Manifest V3`를 기반으로 개발되었습니다.
`Manifest V3`는 기존의 `background page` 대신 `service worker`를 사용하여 백그라운드 작업을 처리하고, 보안성과 성능을 개선합니다.

주요 구성 요소는 다음과 같습니다:

- `content_scripts`: 브라우저 웹 페이지에 donuTool의 오버레이 UI를 주입
- `background (service worker)`: 사용자 설정 데이터 관리, storage 접근, 웹 요청 처리 등 중앙 역할 수행
- `permissions` 및 `host_permissions`: 필요한 API 접근 권한과 사이트 도메인 지정
- `action` 및 `options_page`: 확장 아이콘 클릭 시 표시되는 팝업 UI와 설정 페이지 관리

### 1.1 브라우저 DOM에 주입된 오버레이 UI와 React의 연결

donuTool의 툴바 UI는 React 컴포넌트를 `content script`로 직접 주입하지 않고, 팝업 페이지 내에서 관리하는 버튼 세팅(배열) 정보를 `content script`에 메시지로 전달합니다.
`content script`는 전달받은 배열 정보를 바탕으로 DOM에 직접 UI 요소를 생성·수정하며, 버튼 인터페이스를 업데이트합니다.
이 방식은 React와 `content script`를 분리하면서도 사용자 설정을 실시간으로 반영할 수 있도록 설계되었습니다.

### 1.2 툴바 UI 생성 로직 (toolBarElement.js)

팝업 페이지에서 전달받은 버튼 세팅(배열) 정보를 기반으로, `content script`가 DOM에 직접 툴바 UI와 버튼들을 생성합니다.

```javascript
// overlay/toolBarElement.js
export async function createToolBarElement() {
  const toolBarElement = document.createElement("div");
  toolBarElement.id = "donuTool-toolBar";

  const buttonsSetting = await new Promise((resolve) => {
    chrome.storage.local.get("buttonsSetting", (data) => {
      resolve((data.buttonsSetting || []).slice(0, 5));
    });
  });

  for (let i = 0; i < buttonsSetting.length; i++) {
    const btn = await createToolBarButton(
      `donuTool-button${i+1}`,
      /* top, left 좌표 */,
      buttonsSetting[i].image,
      buttonsSetting[i].id
    );
    toolBarElement.appendChild(btn);
  }

  return toolBarElement;
}
```

### 1.3 페이지에 툴바 UI 주입 & 메세지 처리 코드

`content script`가 페이지에 툴바 UI를 주입하고, 팝업 페이지에서 전달받은 설정 변경 메시지를 처리합니다.

```javascript
// overlay/injectToolBarUI.js
(async () => {
  const { createToolBarElement } = await import(
    chrome.runtime.getURL("overlay/toolBarElement.js")
  );

  // 초기 툴바 UI 생성 및 주입
  let toolBarUI = await createToolBarElement();
  document.body.appendChild(toolBarUI);

  // 팝업 페이지에서 버튼 세팅 변경 시 content script에 메시지 전송
  chrome.runtime.onMessage.addListener((message) => {
    if (message.action === "updateToolBar") {
      toolBarUI.remove();
      createToolBarElement().then((newToolBarUI) => {
        toolBarUI = newToolBarUI;
        document.body.appendChild(toolBarUI);
      });
    }
  });
})();
```

### 1.4 Service worker 주요 로직 (background.js)

`background.js`에서는 `content script`나 팝업 페이지에서 전달받은 메시지를 처리하고,<br>
탭 제어, 북마크, 이미지 다운로드, 스크린샷 등 다양한 기능을 수행합니다.

```javascript
// background.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  const handler = messageHandlers[message.action];
  if (handler) {
    handler(message, sender, sendResponse);
    return true; // 비동기 응답 처리
  }
});

// 예: 현재 탭 닫기 기능
function handleCloseTab() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0]?.id) {
      chrome.tabs.remove(tabs[0].id);
    }
  });
}

// 예: 탭 북마크 기능
function handleBookmarkTab() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    chrome.bookmarks.create({
      title: tab.title,
      url: tab.url,
    });
    chrome.tabs.sendMessage(tab.id, {
      action: "showBookmarkAlert",
      title: tab.title,
    });
  });
}
```

### 1.5 Service worker와 content script 간 메시지 흐름

- `content script`는 사용자 인터랙션(예: 버튼 클릭, 설정 변경)을 감지하면,<br>`chrome.runtime.sendMessage`를 사용해 `service worker`로 전달
- `service worker`는 이 메시지를 받아 `local storage`에 데이터를 저장하거나, 백엔드 API 호출 등 추가 작업 수행
- 작업 결과나 최신 설정 값은 다시 `content script`에 메시지로 반환되어 UI를 실시간으로 업데이트
- React 컴포넌트에서는 이를 `zustand` 등 전역 상태 관리로 받아 사용자 화면에 반영

이 구조를 통해 donuTool은 웹 페이지에 독립적이면서도 React와 Chrome API를 유기적으로 연결하여
사용자 설정 변경, 버튼 인터랙션, 데이터 동기화 등 복잡한 동작을 안정적으로 구현하고 있습니다.

# 🚀 최적화

# 👌 사용자 경험

# 💥 트러블 슈팅

# ⚒️ 리팩토링

# 🗓️ 기간

- 프로젝트 기간: 2025년 6월 23일 ~ 7월 17일
- 1주차
  - 아이디어 수집 및 선정
  - 아이디어 POC
  - 칸반 작성
  - 기술 스택 선정
  - 프로젝트 (확장프로그램, 웹) 환경 설정
- 2주차
  - 확장프로그램 메인페이지 및 설정페이지 UI 구현
  - 브라우저 DOM에 주입할 툴바 UI 구현
  - 툴바 UI 활성화/비활성화 로직 구현
  - 툴바 내 버튼 및 인터랙션 구현
- 3주차
  - 확장프로그램 설정페이지 드래그 앤 드롭 구현
  - 설정페이지와 툴바UI 버튼 연동
  - 각 버튼 별 기능 구현
  - 사용자 설정 브라우저 스토리지 저장
  - 사용자 브라우저 테마 설정 인식 및 동기화
  - 앱 배포
- 4주차
  - 로그인 기능 구현
  - 게스트 모드 구현
  - 로그인 시 DB에 저장되어 있는 사용자 설정 불러오기 기능 구현
  - 사용자 설정 실시간 DB에 저장 기능 구현
  - 사용자 대시보드 웹 페이지 구현
    - 메인 페이지
    - 도움말 페이지
    - 계정 페이지
    - 통계 페이지
    - 설정 페이지
  - README.md 작성

# 📝 소감
