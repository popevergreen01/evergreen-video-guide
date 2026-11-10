# T-Evergreen | คู่มือวิดีโอสำหรับลูกค้า

เว็บรวม 9 คลิปการประกอบ ติดตั้ง และดูแลเต็นท์ รองรับมือถือและคอมพิวเตอร์

## Deploy บน Vercel

1. Import Git Repository นี้ใน Vercel
2. Framework Preset: Other
3. Root Directory: ค่าเริ่มต้น (รากของ repository)
4. Output Directory: dist
5. ไม่ต้องใช้ Build Command, Install Command หรือ Environment Variables
6. กด Deploy

ไฟล์ vercel.json ตั้งค่าสำหรับเว็บ static ไว้แล้ว

## แก้ไขเนื้อหา

แก้ชื่อคลิป ลิงก์ และรูปแบบได้ที่ dist/index.html

เมื่อเชื่อม GitHub กับ Vercel แล้ว การอัปเดต branch main จะใช้กระบวนการ deploy ของ Vercel
