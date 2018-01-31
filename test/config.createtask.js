module.exports = {
    timeout: 100000,
    url: "http://xxxx.claimdi.com/",
    urlCreateTask: "http://xxxx.claimdi.com/Task/Create/",
    ids: {
        form: "#frmBody",
        username: "#txtuser",
        password: "#txtpass",
        submit: "#btnlogin",
        informerName: '#informerName',
        informerTel: '#informerTel',
        insId: '#CarInfo_policyInsurerId_ddl',
        carRegis: '#tab_claim #CarInfo_carRegis',
        btnSave: '#m_save'
    },
    data: {
        username: "admin",
        password: "xxxx",
        informerName: 'นภดล ทดสอบ',
        informerTel: '1231232111',
        insId: 'IN0001',
        carRegis: 'ทด 1234'
    }
};
