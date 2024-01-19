import dotenv from 'dotenv';
dotenv.config();


interface configType {
    token: string;
    mapping: { [key: string]: string[] },
    receriverGuildId: string;
    senderGuildId: string;
    owner: string;
    admins: string[];

}

const config: configType = {
    token: process.env.TOKEN || '',
    mapping: {
        '725949000058142730': ['1197766043419033691'], // watch-list
        '1162451626464923678': ['1197766078735061092'], // optiondr-trades;
        '1090318963331838053': ['1197766104622309457'], // demon-alerts
        '1133173656109993984': ['1197766170720338011'], // dd-king-swings
        '974016202487767110': ['1197766206355144744'], // enrique-trades
        '1164260086177337446': ['1197766234113065000'], // eva-panda-trades
        '953812898059276369': ['1197766258641346701'], // bryce-plays
        '1090673126527996004': ['1197766289255563294'], // flint-trades
        '1090776258071240745': ['1197766380762710076'], // waxui-alerts
        '1154858987460775946': ['1197766482176782397'], // ryan-trades
        '1196227916032376883': ['1197766507573284874'], // arrow-trades
        '945382350810910760': ['1197766547691814972'], // prophet-swing-trades
        '1143397686209417397': ['1197766635960946779'], // adex-swings
        '1196211182143557833': ['1197766670551363684'], // optiondr-swings
        '1126171646236045323': ['1197766716613218426'], // prophet-day-trades
        '1145998626708017182': ['1197766747898519593'], // adex-day-trades
        '1154851141197234176': ['1197766779062210631'], // bishop-trades
        '1143875915181473812': ['1197766844363313183'], // 500-to-5000

    },
    receriverGuildId: '1197765930067968150',
    senderGuildId: '682259216861626378',
    owner: "510716396276285440",
    admins: ['510716396276285440']
}


export default config;