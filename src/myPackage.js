// 이 파일은 모듈 패키지라 가정함.

// @ts-check
// //@ts-check: 최상단에 적어준다. 타입스크립트 파일한테 js파일을 확인하라고 알리는것

// JSDoc Reference: JSDoc 주석을 사용하여 JavaScript 파일에 type 정보를 제공할 수 있습니다. (자바스크립트 파일에서 타입 정보를 제공할 수 있습니다.)

//(JSDoc 예시)
/**
 * 프로젝트르 초기화 한다.
 * @param {object} config 
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns 
 */

export function init(config){
    return true;
}

/**
 * 프로젝트르 종료 한다.
 * @param {number} code 
 * @returns
 */
export function exit(code) {
    return code + 1;
}