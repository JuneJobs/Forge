/// <reference path="../Scripts/ext-all-debug.js" />
/// <reference path="../Scripts/component.js" />
/// <reference path="../Scripts/noncomponent.js" />

//Sign In window

var pnl_signInHeight = 505;
var pnl_signInWidth = 450;
var pnl_signIn = new Ext.Panel({
    width: pnl_signInWidth,
    frame: true,
    height: pnl_signInHeight,
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

ApEvent.onlaod = function(){
    viewPanel.add(pnl_signIn);
    var wMargin = (viewPanel.getSize().width - pnl_signInWidth) / 2
    var hMargin = (viewPanel.getSize().height - pnl_signInHeight) / 2
    marginstr = hMargin.toString() + 'px ' + wMargin.toString() + 'px ' + hMargin.toString() + 'px ' + wMargin.toString() + 'px';
    pnl_signIn.setMargin(marginstr);
    pnl_signIn.add(tbl_SignIn);

    viewPanel.on('resize', function () {
        var wMargin = (viewPanel.getSize().width - pnl_signInWidth) / 2
        var hMargin = (viewPanel.getSize().height - pnl_signInHeight) / 2
        marginstr = hMargin.toString() + 'px ' + wMargin.toString() + 'px ' + hMargin.toString() + 'px ' + wMargin.toString() + 'px';
        pnl_signIn.setMargin(marginstr);
    });
}