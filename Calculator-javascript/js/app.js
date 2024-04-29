alert('طرز کارکرده اولیه ماشین حساب');
alert('اگر دکمه ها را زدید و دیدید که چیزی براتون نمیاره دکمه مساوی رو بزنید و بعد یک ارور براتون میاره و بعد دکمه سی به انگلیسی را بزنید و بعد ارور خود به خود پاک میشه و ماشین حساب کار میکنه');
let result = document.getElementById('result');
function display(value) {
    currentInput += value;
    result.value = currentInput;
}
function solve() {
    try {
        // اجرای محاسبات بر روی متغیر موقت
        result.value = eval(currentInput);
        currentInput = result.value;  // ذخیره نتیجه برای استفاده در محاسبات بعدی
    }
    catch (error) {
        result.value = 'Error';
        currentInput = '';
    }
}
function clearScreen() {
    result.value = '';
    currentInput = '';
}