// const signInBtn = document.getElementById("signIn");
// const signUpBtn = document.getElementById("signUp");
// const firstForm = document.getElementById("form1");
// const secondForm = document.getElementById("form2");
// const container = document.querySelector(".container");
 
// signInBtn.addEventListener("click", () => {
// 	container.classList.remove("right-panel-active");
// });
 
// signUpBtn.addEventListener("click", () => {
// 	container.classList.add("right-panel-active");
// });
 
// firstForm.addEventListener("submit", (e) => e.preventDefault());
// secondForm.addEventListener("submit", (e) => e.preventDefault());


const loginBtn = document.getElementById('loginBtn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const resultDiv = document.getElementById('result');
const findpwback = document.getElementById('findpwback');
const aboutauthor = document.getElementById('aboutauthor')

findpwback.addEventListener("click", () => {
    findpwback.innerHTML = '<a href="#" class="link" style="color:rgb(170, 83, 83)" id="findpwback">牛魔的 自己的密码自己找</a>'
})

aboutauthor.addEventListener("click", () => {
    document.title = "正在跳转..."
    window.location.href = "https://www.douyin.com/user/MS4wLjABAAAAn6IsTfv31-i53LhMuK9Vis9hqg4L6eAXz-rxhirXGBM?from_tab_name=main";
})

function handleLogin(){
    console.log("handleLogin 函数被调用");
    // 读取输入值
    const username = usernameInput.value.trim();  // trim()去除首尾空格
    const password = passwordInput.value;
    
    // 验证输入
    if(!validateInputs(username, password)){
        return;
    }

    // 显示读取到的数据
    displayResult(username, password);
        
    // 这里可以添加实际的登录逻辑
    performLogin(username, password);
}

function showError(message) {
    resultDiv.innerHTML = '<div style="color: red;">${message}</div>';
}
function clearError() {
    resultDiv.innerHTML = '';
}

// 输入验证函数
function validateInputs(username, password){
    console.log("validateInputs 函数被调用");
    if(!username){
        alert('请输入用户名');
        console.log("请输入用户名");
        usernameInput.focus();
        return false;
    }
    if (!password) {
        alert('请输入密码');
        passwordInput.focus(); // 聚焦到密码输入框
        return false;
    }

    const hash = CryptoJS.MD5(password).toString();
    // 信息比对
    if(username == 'admin'){
        if(hash == '81dc9bdb52d04dc20036dbd8313ed055'){
            clearError();
            document.title = "正在跳转..."
            window.location.href = "https://polaris0v0.github.io/WebNavigation/";
            return true;
        }
        else{
            alert('密码错误');
            passwordInput.focus();
            return false;
        }
    }
    else if(username == '北辰0v0'){
        if(hash == '4bf8b8af8ee5a1ce83bf29f225189860'){
            clearError();
            document.title = "正在跳转..."
            window.location.href = "https://polaris0v0.github.io/WebNavigation/";
            return true;
        }
        else{
            alert('密码错误');
            passwordInput.focus();
            return false;
        }
    }
    else if(username == '漫'){
        if(hash == 'dddba3589ac8f8824101f3d97386e27e'){
            clearError();
            document.title = "正在跳转..."
            window.location.href = "https://polaris0v0.github.io/WebNavigation/";
            return true;
        }
        else{
            alert('密码错误');
            passwordInput.focus();
            return false;
        }
    }
    else if(username == '劳哈大王'){
        if(hash == 'ded6a1ba99fefd99078fbd22f773c99d'){
            clearError();
            document.title = "正在跳转..."
            window.location.href = "https://polaris0v0.github.io/WebNavigation/";
            return true;
        }
        else{
            alert('密码错误');
            passwordInput.focus();
            return false;
        }
    }
    else if(username == '音子大王'){
        if(hash == '989df936eda3f79332b7e671ef45949b'){
            clearError();
            document.title = "正在跳转..."
            window.location.href = "https://polaris0v0.github.io/WebNavigation/";
            return true;
        }
        else{
            alert('密码错误');
            passwordInput.focus();
            return false;
        }
    }


    // ...添加更多用户数据...


    else{
        alert('用户不存在');
        usernameInput.focus();
        return false;
    }
}

