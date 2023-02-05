import { ref } from "vue";
import { defineStore } from "pinia";

export const useImage = defineStore("Image", () => {
  const image = ref([
    {
        src:`https://erp.mju.ac.th/picture/information/17802cb6ddf44339a02e696ba2644662s.jpg`,
        alt:'01',
        detail:' บริหารธุรกิจ ม.แม่โจ้ จัด โตยฮีตตามฮอย คณะบริหารธุรกิจ ครั้งที่ 8  “สืบจารีตพื้นถิ่น แผ่นดิน 4 ภาค”',
    },
    {
        src:'https://erp.mju.ac.th/picture/information/8e7e15cf4b4d40c783ef2c1a562cba32s.jpg',
        alt:'02',
        detail:' ม.แม่โจ้ เดินหน้าความร่วมมือกับเอกชน วิจัยด้านเทคโนโลยีนวัตกรรมการเกษตร และ หลักสูตรผู้จัดการฟาร์ม',
    },
    {
        src:'https://erp.mju.ac.th/picture/information/8eed863f1f854a6494270633c689e00as.jpg',
        alt:'03',
        detail:' รองประธานสภานิติบัญญัติไต้หวัน เยือน ม.แม่โจ้  หารือความร่วมมือสนับสนุนการศึกษาต่อต่างประเทศให้นักศึกษา',
    },
    {
        src:'https://erp.mju.ac.th/picture/information/4ca1cad227ec4e7a8bf1bc50c9c34dc9s.jpeg',
        alt:'04',
        detail:' ม.แม่โจ้ จัดแข่งขันกีฬาบุคลากร ประจำปี 2565 ส่งเสริมการออกกำลังกาย สร้างสุขภาพดี กระชับความสามัคคีองค์กร',
    },
    {
        src:'https://erp.mju.ac.th/picture/information/603697367ad04c16881971b613ea45c7s.jpeg',
        alt:'05',
        detail:' ม.แม่โจ้ ร่วมพิธีแสดงพระธรรมเทศนา "อุภินนมัตถจรกถา"',
    },
    {
        src:'https://erp.mju.ac.th/picture/information/49e2073335c745649b33cfab2b350e91s.jpg',
        alt:'06',
        detail:' บรรยากาศกิจกรรมเสริมสร้างอัตลักษณ์ลูกแม่โจ้  รุ่น 85  86',
    },
  ]);
  return {image};
});
