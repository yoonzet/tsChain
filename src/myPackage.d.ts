// <Declaration file> 이 파일 안에서는 타입을 설명한다.

interface Config {
    url: string;
}
declare module "myPackage" {
    function init(config: Config):boolean;
    function exit(code: number): number;
}