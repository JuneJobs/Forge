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

    var pnl_signUpHeight = 560;
    var pnl_signUpWidth = 750;
    
    var pnl_signUp = new Ext.Panel({
        width: pnl_signUpWidth,
        frame: true,
        height: pnl_signUpHeight,
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

    var txt_fisrtNm = ApText.create();
    txt_fisrtNm.emptyText = 'Fist name';
    txt_fisrtNm.applyEmptyText();

    var txt_lastNm = ApText.create();
    txt_lastNm.emptyText = 'Last name';
    txt_lastNm.applyEmptyText();
    tbl_SignUp.cellShare(2);

    var txt_userNm = ApText.create();
    txt_userNm.emptyText = 'Username';
    txt_userNm.applyEmptyText();
    var lbl_userNmExp = ApLabel.create("You can use letters, numbers");

    var txt_Pw = ApText.create();
    txt_Pw.emptyText = 'Password';
    txt_Pw.applyEmptyText();
    
    var txt_ConfPw = ApText.create();
    txt_ConfPw.emptyText = 'Confirm password';
    txt_ConfPw.applyEmptyText();
    tbl_SignUp.cellShare(2);
    
    var lbl_userNmExp = ApLabel.create("Use 8 or more characters with a mix of letters, numbers & symbols");

    var lbl_signUpInstead = ApLabel.create("Sign in instead");
    
    var btn_signUpNext = ApButton.create('NEXT');
    btn_signUpNext.setSize(80, 30);
    tbl_SignUp.cellShare(2);


    pnl_signUp.add(tbl_SignUp);
    viewPanel.add(pnl_signUp);

    var wMargin = (viewPanel.getSize().width - pnl_signUpWidth) / 2
    var hMargin = (viewPanel.getSize().height - pnl_signUpHeight) / 2
    marginstr = hMargin.toString() + 'px ' + wMargin.toString() + 'px ' + hMargin.toString() + 'px ' + wMargin.toString() + 'px';
    pnl_signUp.setMargin(marginstr);

    viewPanel.on('resize', function () {
        var wMargin = (viewPanel.getSize().width - pnl_signUpWidth) / 2
        var hMargin = (viewPanel.getSize().height - pnl_signUpHeight) / 2
        marginstr = hMargin.toString() + 'px ' + wMargin.toString() + 'px ' + hMargin.toString() + 'px ' + wMargin.toString() + 'px';
        pnl_signUp.setMargin(marginstr);
    });

    lbl_signUpInstead.eClick = function () {
        viewPanel.remove(pnl_signUp);
        viewPanel.items.items[0].show();
    }
    
    viewPanel.items.items[0].hide();
}