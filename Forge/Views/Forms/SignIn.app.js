/// <reference path="../Scripts/ext-all-debug.js" />
/// <reference path="../Scripts/component.js" />
/// <reference path="../Scripts/noncomponent.js" />
/// <reference path="SignIn.view.js" />
/**
* @KMU Capston project
* @subject load_page 
* @brief insert new page into master form
* @param trees node
* @return 
* @auter Jack Compbel
*/
lbl_createAccount.eClick = function () {
    console.log('labelClick');
    
    viewPanel.items.items[0].hide();
    viewPanel.items.items[1].show();
    fnOptimizePanelSize(pnl_signUp, signUpHeight, signUpWidth);
}
lbl_signUpInstead.eClick = function () {
    viewPanel.items.items[0].show();
    viewPanel.items.items[1].hide();
}
btn_signUpNext.eClick = function () {
    
    if (txt_fisrtNm.getValue() == '') {
        ApMsg.warning('Enter your first name.', function () {
            txt_fisrtNm.focus();
        })
        return;
    }
    if (txt_lastNm.getValue() == '') {
        ApMsg.warning('Enter your last name.', function () {
            txt_lastNm.focus();
        })
        return;
    }
    if (txt_userId.getValue() == '') {
        ApMsg.warning('Enter your user id.', function () {
            txt_userId.focus();
        })
        return;
    }
    
    if (!/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(txt_userId.getValue())) {
        ApMsg.warning('Incorrect email type.', function () {
            txt_userId.focus();
        })
        return;
    }
    if (txt_Pw.getValue() == '') {
        ApMsg.warning('Enter your password.', function () {
            txt_Pw.focus();
        })
        return;
    }
    if (txt_ConfPw.getValue() == '') {
        ApMsg.warning('Enter your confirm password.', function () {
            txt_ConfPw.focus();
        })
        return;
    }

    if (txt_Pw.getValue() != txt_ConfPw.getValue()) {
        ApMsg.warning('Enter your confirm password.', function () {
            txt_ConfPw.focus();
        })
        return;
    }
    
    viewPanel.items.items[1].hide();
    viewPanel.items.items[2].show();
    fnOptimizePanelSize(pnl_signUpVerify, signUpHeight, signUpWidth);
}
lbl_backToSignUp.eClick = function () {
    viewPanel.items.items[1].show();
    viewPanel.items.items[2].hide();
    clearInterval(timer);
    lbl_remainTime.setText("");
    lbl_emailNoti2.setText("");
}

btn_sendVerifyMail.eClick = function() {
    if (lbl_remainTime.text != ""){
        ApMsg.warning('Authentication code already sended.');
        return;
    }
    Ext.Ajax.request({
        async: false,
        url: '/sendVerifyMail',
        method: 'GET',
        params: {
            FISRTNAME: txt_fisrtNm.getValue(),
            LASTNAME: txt_lastNm.getValue(),
            USERID: txt_userId.getValue(),
            PASSWORD: txt_Pw.getValue()
        },
        reader: {
            type: 'json'
        },
        success: function (response, eOpt) {
            lbl_emailNoti2.setText("We will send a e-mal with a authentication code. Standard rates apply.");
            var x = 300;
            timer = setInterval(function () {
                var seconds = (Math.floor(x % 60)).toString();
                if (seconds.length == 1) {
                    seconds = "0" + seconds;
                }
                lbl_remainTime.setText(Math.floor(x / 60).toString() + ":" + seconds);
                if (x > 0) {
                    x = x - 1;
                } else {
                    clearInterval(timer);
                    lbl_signUpInstead.eClick();
                }
            }, 1000)
        },
        failure: function (response, options) {
            ApMsg.warning('Connection error.');
        }
    });
}