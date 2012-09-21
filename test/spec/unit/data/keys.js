var DSA = require('../../../../lib/dsa.js')
  , BigInt = require('../../../../vendor/bigint.js')

var userA = {
  q: 'AA6B0EFC9135D7DBBC44254C63DA1A941E818BD1',
  p: 'C183E9B1029099FE5BECD19610178B943CC62A49D45B1F19BC62E8783334C4A384DD3EE13553CC27118E32786BBD1D82EAED9AA3238C9BC9769703A6000FFD2A415817D97C919FF9BDD13AA82DC16D598881785178BD3D5087F6FAAE1D9415427B85A3CA0EB46E5C8FFA786A8841592644A332E915A5301D624CA80FE54DE0D9',
  g: '3B7158464B65769BB847C8107A4CAFA722400DCB300810C02795F7CB1728C9846A8A2B97156C0D22C9B81AA71348ECD27EC42E2BCABF131B4273D24CDD2E81E0DD0F01F1A567448C775094772CEBD8BEE3DF783A20F5E788E660F771EB26A70E615C204B1FFB70DB0FC6BA459D2AB0CDBCB64A93D41F7268A5F767BB851E5BB0',
  x: 'A992943DEA115032153A4B1687152D4CC64100E1',
  y: 'A92BCA0D2489AEEE94441B6858884A79E7FB1F2E2F699753A76EDDD08C4C94A40D569A426DE23EA2DE11FF73D094879D6D13191C21FEBF6C65ACE518C271EC9D258672CC46EA0BFE354E8B8AD6F6BC6F1E736CE53B1C47F7F5D9EBD9937A7F9D4FE1041B2C235C3B36233187C0FA0A88DFA3970DC1AC70BF3A3989B622F2F454'
}
DSA.inherit(userA)

var userB = {
  q: '9A2DABC81B11A3457D5A4F21401C37A43ECE53BF',
  p: 'DDA92042969C3364AA4081778CA5CA2267492FD5AA7168D9F42EBB5ED952921A3CF9099E76479396512E9326EBC6D3F2EBC64E87384280862422F94D89D78A9C2E216DC8AF85FDD7E700515442939729881B3B39FFBF6E81777F8DE5F161CBCCA046E3524BE0A0F3CB6EA5ECEC4EFB8800028D080B7390DFDDBF17351FCAD781',
  g: 'A909FFECCCF923A8B4B7EE4C703F275C13BE7ABDB6AC893C7FFC002DEC38930BC54AF3FEEE4EB95EA83CB7A475BB4050671B720A596DB500628846C2A0F600985A158EF6248607E3A8405AAE262E2CE3FD2ACBCF72D127076B55A9B120028253A7C9650BAD29FA93AD23DC74303A380560BA4F5ECFCA7A12123BCBA12CA1EDF5',
  x: '9692A2938641E688A46D20E254E68B5DDDB9B2EF',
  y: 'B37228D68D313D6215B0E429E78C0824565B847FC88AF1993488B7B01997232A6868A4BAD3D27C4DA4129AC64EAF600F8B76E7115B35E06FA82BAE0EF7FD833EA4894D89A3613A0706188FCF9A5FB4CF9E32BBBEFE978233C051447FB0C64CE12212F9FCC90C18F93BF1E27ED65D778DFAA23331CE43F33CFE3C970D6F39F0E4'
}
DSA.inherit(userB)

;['q', 'p', 'g', 'x', 'y' ].forEach(function (k) {
  userA[k] = BigInt.str2bigInt(userA[k], 16)
  userB[k] = BigInt.str2bigInt(userB[k], 16  )
})

module.exports = { userA: userA, userB: userB }