const fs = require('fs');
const path = require('path');

const files = [
    { id: '00', name: '00_개요_학습로드맵.md', title: '개요 및 학습 로드맵' },
    { id: '01', name: '01_기초_입문.md', title: '기초 입문' },
    { id: '02', name: '02_중급_교학발전.md', title: '중급 교학 발전' },
    { id: '03', name: '03_심화_대승철학.md', title: '심화 대승 철학' },
    { id: '04', name: '04_실천_확장.md', title: '실천 및 확장' },
    { id: '05', name: '05_용어사전.md', title: '불교 용어 사전' },
    { id: '06', name: '06_주요경전_안내.md', title: '주요 경전 안내' }
];

const studyData = {};

files.forEach(file => {
    const filePath = path.join(__dirname, file.name);
    if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');
        studyData[file.id] = {
            title: file.title,
            content: content
        };
        console.log(`Successfully read: ${file.name}`);
    } else {
        console.warn(`File not found: ${file.name}`);
    }
});

const outputContent = `// Auto-generated file. Do not edit directly.
const studyData = ${JSON.stringify(studyData, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, 'studyData.js'), outputContent, 'utf8');
console.log('Generated studyData.js successfully!');
