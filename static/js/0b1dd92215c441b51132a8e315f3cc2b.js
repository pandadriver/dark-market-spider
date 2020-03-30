(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('船山区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"510903","properties":{"name":"船山区","cp":[105.568297,30.525475],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@@@@@B@@@@@@A@@@@@@@@A@@A@@AA@@@@@@@@@@AA@@@@A@@@@@@AA@@@@B@@@@@@A@@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@BB@@@@@@B@@@@@B@@@B@B@@@"],["@@@AA@OT@@AB@@@@@B@@@@A@@B@@@B@@@@@@@@@B@@@@@@@@@@BB@@@@JBBB@@B@@@@@B@@B@@@@@@B@@@@B@@@@@@@B@@@@@@@B@@@@@@@BA@@@@@ABABABQPCD@@ABAB@@@@@@A@@B@@@@@@@B@@@@@@@B@@@@@@@@BB@@@@@@B@@@@@@@BB@@@@B@@@@@F@B@@@@@B@@@@BB@@@@@@@@@@BB@@@@@@B@@@@@@@B@@@@@@@B@@@@@@@@@BA@@@@@@@@BA@@@CDCBCBCB@@A@@B@@@@A@@@@@@@A@@@@@A@@@@A@@A@@@@@@@@A@@A@@@@A@@EI@@@@@AA@@@@@@@@@AA@@@@A@@@@@@@A@@@@@AB@@@@@@@@ABCBCDABAB@@@BA@@@@@@@@@A@@@@@@@@@A@@@@AA@@@@AA@@@@@@A@@@@A@@A@AAA@A@@@@@@AA@@@@@@@@A@@@@AA@A@@@A@A@A@@@@@A@@@@@A@@@@@A@@@A@@@@BA@@@@@@@A@@@@B@@@@A@@B@@@B@@A@@@@B@@CHELAD@DA@@B@@@@@@@B@@A@@@@@@@A@@@A@@BC@I@@@AB@@A@@@@@A@@@@@@@@BA@@@@BABA@@B@@A@@@@@@BA@@@@@@@A@@@@@@AA@@@@@@@@@@A@@@@@@BABE@@@A@@@@@A@@@@@@@A@@@@@@@@@@@AA@@@@@@@@@A@@B@@@@A@@@@BEDCDA@AB@@@@A@@BA@@@AB@@@@A@@@@@@@A@@@A@@@ABA@@@A@@@A@@@G@E@A@@@A@@@@@@AA@@@@@A@@@@@@@A@@@@AA@@@@@@@@@AA@@@AEECC@A@@@@A@@@@A@@A@@@@@@@A@@@@@A@CBA@A@A@C@A@A@@@@@A@AB@@@@A@@@A@OAG@A@@@A@@@@@@BA@@@@@A@@@@@ABCBCB@BA@@@@BA@@@@@@@AB@BABA@@B@@@@AB@@@@@BIFCBEBGHEFGD@HEHCHGBED@FFFHJ@B@@@@@@@B@@@@@BA@@@@B@LAF@B@@@@@B@@@@@@@B@@@@A@@B@@@@AB@@@@@@ABAB@@A@@B@@@@A@@@@@ABEBAB@@@@A@@@@BA@@@@@A@@@A@A@EBOBGB@@A@AB@@@@A@@@A@ABA@@@A@@B@@A@@@@@@@@B@@A@@@@B@@@@@BAF@@@B@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@BB@@DFDFBBBDB@@@@B@@@@@@@B@@@@@@@B@@@@@B@@@D@BAB@D@B@@@@@BA@@@@@@@@B@@A@@@@@@@A@@@@@AB@@@@A@A@E@O@G@A@@@A@@@@@A@@@@@@@A@@B@@@@CBADA@@@@@@B@@A@@@@B@@@@@@@@@B@@@@B@@@@B@@@@B@@@@@@B@@B@@@@@B@@@B@FAL@F@B@@@B@@@@@B@@@@@@@B@@@@B@@@@B@@@@@@B@@@@@@@@@B@@@@AB@@@DABCJ@BAFAB@@@@@@@B@@@@@@@B@@@@BB@B@BBFBF@@@B@@@@@@@B@@@@@@@B@@@@@BA@AF@@@@@B@@A@@@@B@@A@@BABA@@@@@AB@@@@@@A@@@@@A@@@@BG@EBA@@@A@@@@@A@@@@@A@@@@@A@EACAE@GA@@AA@@@@A@@@@@@@A@@AA@@@AAA@@AA@@@@@@@@AA@@@@@@A@@@@@A@CAA@@@A@@@@@@@A@@A@@@@@@A@@A@@@@@@@AA@@A@@@AA@@@@@@A@@@@@@@A@@@@@@@AB@@@@@@@@AB@@@@@@@BADADAHAFEJ@DAD@@@BA@@@@B@@@@@@A@@B@@@@@@A@@@@@A@@@@@@@A@@@A@@@@@@AA@@@@@A@@A@@A@@@@@@@A@@@@@A@@@@@@@A@@@@@@@@@AB@@@@@@@@@B@@@BAD@B@BAFC\\AF@D@FA@@B@@@@@B@@@@@@A@@@@@@@AB@@@@@@A@@A@@@@A@@@@@@@@@AA@@@@@@@A@@@@CE@A@@@A@@@A@@CI@CAE@A@@@A@@@@@@@AA@@@@@@AAACCGIABA@A@CBABCDABABAD@B@DBBBDBBB@DBDBBD@@@D@BBB@BBDBDDBFBB@DBB@BD@BCDABABADBB@BDBB@BBDDBBDBD@BB@BD@BBBBBB@@@BBD@D@BBF@D@B@BBB@BBBBBBBBBBA@@BA@@BA@@@A@A@@@ABA@ABA@@@@BAB@BA@AB@@A@@H@B@DBBBBBBB@D@D@DABBD@BDDBBBBBBDBB@D@D@D@D@D@DBB@D@DBD@D@FBDBDBB@BB@@B@@BB@@BBB@BBD@B@B@@@BBBBDBBD@B@DAB@DADADCBABAFABADB@DBDBBDBBB@@B@DABEBCBCBCBCDADAD@D@F@F@B@D@F@D@FABADCBAB@@A@ABABCB@BABC@C@@BABAD@D@BBDAD@@BBB@D@B@DBBBBBABADA@@B@D@D@BBB@DBDDBBDBBB@BFBDBFBD@F@B@B@BA@CBCBABAFCFCFCFCDADCBADABADBBBDDFBDAD@D@@@BAD@D@BBDBBBBB@BBBDBBDBBDDB@D@D@@@D@@C@C@ABCBAB@DBD@D@DBB@BDDBBDBDDDBDBBD@D@F@D@DBFBBD@D@BBBBDBF@DBDBBDDB@B@@A@A@ABCBADAD@BADADADCDABABAB@B@DABC@A@C@EACBC@CACBE@E@CBCB@BABA@CBC@C@CAC@CAAAAAAC@ABC@A@AA@AAABC@ABC@AACACCACAC@AAA@AC@ABCBC@CBCAC@AAAAA@CA@AACAAACACAAAAE@CACBC@A@CBCBCBABC@AAA@C@AAE@EAC@A@C@EAA@E@AAC@C@ABCBC@CBA@AAACAAAA@C@ABCBCBCDEDCDCDCBEDCBCBA@C@AAAA@ABE@@BC@C@A@CCCAACEAE@C@EBCBC@C@AAACAEAC@CAEACCAC@A@C@C@CACACAA@C@ABABC@A@A@C@@@ACAC@C@C@EECCCAACAABC@ABADABABAB@BAB@D@BADBD@D@B@B@D@DBDBDBBBBBDBDDDBBBB@D@D@B@DABAD@DA@ADABCBCDC@@BCBCBCBEBC@C@E@EBE@C@EBGBEBABCBABAB@DAHAB@B@B@D@DBDB@@DBBBD@BBD@BDD@BDBBFDB@BDB@BDBBBBDDBBBBBBBBD@D@BABABA@A@ABA@@@C@AAE@A@A@AAA@EACAEAA@C@CBCDCB@FA@AB@BAHCDABABA@A@A@AAAAACAACA@ACAACAACECEAACAEBCBCBEBCBA@CACAA@@CAECC@C@CAE@EAEAAAAABC@ABAFIDCBCBA@@@@@A@AA@C@ABCBA@A@A@"]],"encodeOffsets":[[[108260,31131]],[[108271,31049]]]}}],"UTF8Encoding":true});}));