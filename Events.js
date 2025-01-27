const OnClickButton = new CustomEvent('butonatıklanınca', { detail: 'Butona Tıklandı!' });
const OnLoadedWindow = new CustomEvent('sayfayuklenince', { detail: 'Sayfa Yuklendi!' });
export { OnClickButton, OnLoadedWindow };