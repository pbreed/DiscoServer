const knex = require('knex')(require('./knexfile'))
module.exports = {
  createrec ({iNatIp,iLocalIp,iMac,iApp,iPlat}) {
    console.log(`Add user ${NatIp}`)
    return knex('records').insert({NATip : iNatIp,LocalIp : iLocalIp ,MAC : iMac, AppName : iApp, ModName : iPlat
    })
  }
}


