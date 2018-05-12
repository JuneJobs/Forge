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
var lbl_hello = ApLabel.create("Qualcomm Institute");
var lbl_signIn = ApLabel.create("Sign in");
//lbl_signIn.
var lbl_discrip = ApLabel.create("with your Qualcomm Institute Account");


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