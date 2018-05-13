/// <reference path="../Scripts/ext-all-debug.js" />
/// <reference path="../Scripts/component.js" />
/// <reference path="../Scripts/noncomponent.js" />

//Sign In window
var timer;
var signInHeight = 505;
var signInWidth = 450;

var signUpHeight = 750;
var signUpWidth = 560;

var pnl_signIn = new Ext.Panel({
    width: signInHeight,
    frame: true,
    height: signInWidth,
    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    }
});


var tbl_SignIn = ApTable.create(1);
tbl_SignIn.setTarget();
var img = ApImg.create('../Themes/logo-ucsd.png');
img.setMargin('10 0 0 0');
img.setSize(220, 70);
var lbl_signIn = ApLabel.create("Sign in");
lbl_signIn.addCls('fomtsizeAndColor');
//lbl_signIn.
var lbl_discrip = ApLabel.create("with your Qualcomm Institute Account");
lbl_discrip.addCls('account');
var lbl_uid = ApLabel.create('Email or phone');
lbl_uid.addCls('uidLabel');
var txt_uid = ApText.create('');
var lbl_forgotEmail = ApLabel.create('Forgot email?');
lbl_forgotEmail.addCls('hyperlinkLabel1');
txt_uid.setWidth(400);
var lbl_suggestion = ApLabel.create("You don't have your account? Use Your own Programs to sign in.");
lbl_suggestion.addCls('lbl_suggestion');
var lbl_createAccount = ApLabel.create('Create account');
lbl_createAccount.addCls('hyperlinkLabel2');
var btn_next = ApButton.create('NEXT');
btn_next.setSize(80, 30);
tbl_SignIn.cellShare(2);

pnl_signIn.add(tbl_SignIn);
//sign up

var pnl_signUp = new Ext.Panel({
    width: signUpWidth,
    frame: true,
    height: signUpHeight,
    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    }
});
var tbl_SignUp = ApTable.create(1);
tbl_SignUp.setTarget();
var img_signUp = ApImg.create('../Themes/logo-ucsd.png');
img_signUp.setMargin('10 0 0 0');
img_signUp.setSize(110, 35);
var lbl_signUpCreateAccount = ApLabel.create("Create your Qualcomm Institute Account");
lbl_signUpCreateAccount.addCls('fomtsizeSignUp');

var txt_fisrtNm = ApText.create();
txt_fisrtNm.setSize(250, 30);
txt_fisrtNm.emptyText = 'Fist name';
txt_fisrtNm.applyEmptyText();

var txt_lastNm = ApText.create();
txt_lastNm.emptyText = 'Last name';
txt_lastNm.setSize(250, 30);
txt_lastNm.applyEmptyText();
tbl_SignUp.cellShare(2);

var txt_userId = ApText.create();
txt_userId.emptyText = 'User ID (email address)';
txt_userId.setSize(505, 30);
txt_userId.applyEmptyText();
var lbl_userNmExp = ApLabel.create("You can use your email address");
lbl_userNmExp.addCls('userNmExp');

var txt_Pw = ApText.create();
txt_Pw.emptyText = 'Password';
txt_Pw.inputType = 'password';
txt_Pw.setSize(250, 30);
txt_Pw.applyEmptyText();
txt_Pw.setId("pw");

var txt_ConfPw = ApText.create();
txt_ConfPw.emptyText = 'Confirm password';
txt_ConfPw.inputType = 'password';
txt_ConfPw.setSize(250, 30);
txt_ConfPw.applyEmptyText();
tbl_SignUp.cellShare(2);

var lbl_userPwExp = ApLabel.create("Use 8 or more characters with a mix of letters, numbers & symbols");
lbl_userPwExp.addCls('userPwExp');

var lbl_signUpInstead = ApLabel.create("Sign in instead");
lbl_signUpInstead.addCls('hyperlinkLabel3');

var btn_signUpNext = ApButton.create('NEXT');
btn_signUpNext.setSize(80, 30);
tbl_SignUp.cellShare(2);

pnl_signUp.add(tbl_SignUp);

//sign up verify
var pnl_signUpVerify = new Ext.Panel({
    width: signUpWidth,
    frame: true,
    height: signUpHeight,
    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    }
});
var tbl_SignUpVerify = ApTable.create(1);
tbl_SignUpVerify.setTarget();
var img_signUpVerify = ApImg.create('../Themes/logo-ucsd.png');
img_signUpVerify.setMargin('10 0 0 0');
img_signUpVerify.setSize(110, 35);
var lbl_signUpVerify = ApLabel.create("Create your Qualcomm Institute Account");
lbl_signUpVerify.addCls('fomtsizeSignUp');

var lbl_emailNoti = ApLabel.create("For your security, Qualcom Institute wants to make sure it's really you. ");

var btn_sendVerifyMail = ApButton.create("Get Authentication code");
btn_sendVerifyMail.setSize(150, 30);

var txt_vrfyInput = ApText.create("");
txt_vrfyInput.setSize(300, 30);
txt_vrfyInput.emptyText = 'Enter Authentication code';
txt_vrfyInput.applyEmptyText();

var lbl_remainTime = ApLabel.create("");
lbl_remainTime.setSize(50, 30);
lbl_remainTime.addCls('remainTime');
tbl_SignUpVerify.cellShare(3);

var lbl_emailNoti2 = ApLabel.create("");
var lbl_backToSignUp = ApLabel.create("Back");
var btn_signUpVerfyNext = ApButton.create("VERIFY");
tbl_SignUpVerify.cellShare(2);
//btn event

pnl_signUpVerify.add(tbl_SignUpVerify);


ApEvent.onlaod = function(){
    viewPanel.add(pnl_signIn);
    //viewPanel.items.items[0].hide();
    viewPanel.add(pnl_signUp);
    viewPanel.add(pnl_signUpVerify);
    viewPanel.items.items[1].hide();
    viewPanel.items.items[2].hide();
    fnOptimizePanelSize(pnl_signIn, signInWidth, signInHeight);

    viewPanel.on('resize', function () {
        fnOptimizePanelSize(pnl_signIn, signInWidth, signInHeight);
        fnOptimizePanelSize(pnl_signUp, signUpHeight, signUpWidth);
        fnOptimizePanelSize(pnl_signUpVerify, signUpHeight, signUpWidth);



    });
    lbl_createAccount.eClick();
    txt_fisrtNm.setValue("Junhee");
    txt_lastNm.setValue("Park");
    txt_userId.setValue("j.jobs1028@gmail.com");
    txt_Pw.setValue("skskzja");
    txt_ConfPw.setValue("skskzja");
}


function fnOptimizePanelSize (panel, w, h) {
    var wMargin = (viewPanel.getSize().width - w) / 2
    var hMargin = (viewPanel.getSize().height - h) / 2
    marginstr = hMargin.toString() + 'px ' + wMargin.toString() + 'px ' + hMargin.toString() + 'px ' + wMargin.toString() + 'px';
    panel.setMargin(marginstr);
}