/* Chủ đề lâm sàng — biên soạn nội bộ khoa Dược, Bệnh viện Đại học Phenikaa.
   KHÔNG phải văn bản đã ban hành. Tệp do màn hình Biên tập sinh ra.
   Nguyên tắc: chỉ giữ nội dung làm thay đổi quyết định. Phần sâu để ở tài liệu tham khảo. */

const CHUDE_VERSION = "2026-08-18";

const CHUDE = [
 {
  "id": "tang-kali-mau",
  "ten": "Tăng kali máu",
  "nhom": "Rối loạn điện giải",
  "tukhoa": "hyperkalemia hyperkalaemia kali cao K+",
  "nguong": "K⁺ ≥ 6,5 mmol/L hoặc có biến đổi ECG ở bất kỳ mức nào → xử trí cấp cứu ngay.\nLoại trừ tăng kali giả trước: mẫu vỡ hồng cầu, garo lâu, nắm chặt tay khi lấy máu.",
  "coche": "98% kali nằm trong tế bào. Kali ngoại bào tăng làm điện thế nghỉ bớt âm, màng khử cực một phần, kênh natri bị bất hoạt — hậu quả là giảm tính kích thích và dẫn truyền chậm.\nECG diễn tiến: T cao nhọn → PR dài, P dẹt → QRS giãn → sóng hình sin → rung thất.\nBa hướng can thiệp: đối kháng trên màng tim, đẩy kali vào tế bào, thải kali. Chỉ hướng cuối làm giảm tổng lượng kali, hai hướng đầu chỉ mua thời gian.",
  "bac": [
   { "ma": "nhe",  "nhan": "Nhẹ",        "khoang": "5,5 – 5,9 mmol/L" },
   { "ma": "tb",   "nhan": "Trung bình", "khoang": "6,0 – 6,4 mmol/L" },
   { "ma": "nang", "nhan": "Nặng",       "khoang": "≥ 6,5 hoặc ECG biến đổi" }
  ],
  "thuoc": [
   {
    "ten": "Calci gluconat",
    "vaitro": "Đối kháng trên màng tim",
    "bac": ["nang"],
    "lieu": "Dung dịch 10%: 10–20 mL tiêm TM chậm 5–10 phút. Nhắc lại sau 5–10 phút nếu ECG chưa cải thiện.",
    "khoiphat": "1–3 phút",
    "keodai": "30–60 phút",
    "coche": "Ca²⁺ đẩy ngưỡng điện thế về phía dương, khôi phục khoảng cách với điện thế nghỉ đã bị khử cực. Tim đáp ứng lại bình thường mà kali máu không đổi.",
    "luuy": [
     "Không hạ kali. Bắt buộc kèm biện pháp đẩy kali vào tế bào và thải kali.",
     "Tương kỵ bicarbonat và phosphat. Tráng dây bằng NaCl 0,9% trước và sau.",
     "Đang dùng digoxin: pha 100 mL, truyền 20–30 phút."
    ]
   },
   {
    "ten": "Insulin regular",
    "vaitro": "Đẩy kali vào tế bào",
    "bac": ["tb", "nang"],
    "lieu": "10 UI tiêm TM + 25 g glucose (50 mL G50% hoặc 125 mL G20%).\nĐường huyết > 15 mmol/L: dùng insulin đơn độc.",
    "khoiphat": "10–20 phút",
    "keodai": "4–6 giờ",
    "coche": "Hoạt hóa bơm Na⁺/K⁺-ATPase ở cơ vân, đẩy kali vào trong tế bào. Tác dụng độc lập với glucose — glucose chỉ để phòng hạ đường huyết.",
    "luuy": [
     "Hạ đường huyết muộn sau 1–3 giờ là biến chứng hay gặp nhất. Theo dõi đường huyết mỗi giờ trong 6 giờ.",
     "Lấy bằng bơm tiêm insulin, không dùng bơm tiêm 1 mL — đây là nguyên nhân sai liều hay gặp nhất."
    ]
   },
   {
    "ten": "Salbutamol",
    "vaitro": "Đẩy kali vào tế bào",
    "bac": ["tb", "nang"],
    "lieu": "Khí dung 10–20 mg trong 4 mL NaCl 0,9%, thở 10 phút. Phối hợp thêm với insulin, không dùng đơn độc.",
    "khoiphat": "khoảng 30 phút",
    "keodai": "2–4 giờ",
    "coche": "Kích thích beta-2 làm tăng cAMP và hoạt hóa bơm Na⁺/K⁺-ATPase. Cùng đích với insulin nhưng khác đường tín hiệu nên phối hợp có tác dụng cộng hợp.",
    "luuy": [
     "Liều gấp 4–8 lần liều giãn phế quản. Giải thích trước để điều dưỡng và bác sĩ không nghi ngờ y lệnh.",
     "20–40% không đáp ứng, nhất là người đang dùng chẹn beta."
    ]
   },
   {
    "ten": "Natri bicarbonat",
    "vaitro": "Đẩy kali vào tế bào",
    "bac": ["nang"],
    "lieu": "Chỉ dùng khi có toan chuyển hóa kèm theo. Không dùng thường quy.",
    "khoiphat": "chậm, hàng giờ",
    "keodai": "thay đổi",
    "coche": "Tăng pH làm H⁺ ra khỏi tế bào, kali đi vào để cân bằng điện tích. Phụ thuộc hoàn toàn vào việc bệnh nhân có toan hay không.",
    "luuy": [
     "Gần như vô hiệu ở bệnh nhân lọc máu không có toan.",
     "Tương kỵ calci gluconat — không dùng chung dây truyền."
    ]
   },
   {
    "ten": "Furosemid",
    "vaitro": "Thải kali",
    "bac": ["nhe", "tb", "nang"],
    "lieu": "20–40 mg tiêm TM, liều cao hơn ở bệnh thận mạn. Bảo đảm đủ thể tích tuần hoàn trước khi dùng.",
    "khoiphat": "15–30 phút",
    "keodai": "4–6 giờ",
    "coche": "Ức chế kênh Na⁺-K⁺-2Cl⁻ ở quai Henle, tăng natri và dịch đến ống lượn xa nên tăng bài tiết kali. Chỉ tác dụng khi thận còn chức năng.",
    "luuy": [
     "Vô hiệu khi vô niệu hoặc thiểu niệu nặng — nghĩ đến lọc máu.",
     "Không đủ mạnh để dùng đơn độc trong tăng kali nặng."
    ]
   },
   {
    "ten": "Calci polystyren sulfonat",
    "vaitro": "Thải kali",
    "bac": ["nhe", "tb"],
    "lieu": "Uống 15–30 g/ngày chia 2–3 lần, pha 30–50 mL nước. Không pha nước hoa quả vì có chứa kali.",
    "khoiphat": "vài giờ",
    "keodai": "trong thời gian dùng thuốc",
    "coche": "Nhựa trao đổi cation, nhả Ca²⁺ và giữ K⁺ ở đại tràng rồi thải theo phân. Khởi phát chậm nên không có vai trò trong cấp cứu.",
    "luuy": [
     "UKKA 2023 đã bỏ resin khỏi phác đồ cấp, thay bằng natri zirconium cyclosilicat và patiromer — hai thuốc này chưa sẵn có ở Việt Nam. Cần biết khi trao đổi với bác sĩ.",
     "Không phối hợp sorbitol — nguy cơ hoại tử ruột.",
     "Uống cách thuốc khác ít nhất 3 giờ. Ngừng khi kali < 5 mmol/L."
    ]
   },
   {
    "ten": "Lọc máu",
    "vaitro": "Thải kali",
    "bac": ["nang"],
    "lieu": "Không phải thuốc. Chỉ định khi tăng kali nặng kèm vô niệu, không đáp ứng điều trị nội khoa, hoặc kèm quá tải dịch, toan nặng.",
    "khoiphat": "ngay khi bắt đầu lọc",
    "keodai": "phụ thuộc cuộc lọc",
    "coche": "Loại kali trực tiếp khỏi máu qua màng lọc. Biện pháp duy nhất chắc chắn hạ được kali khi thận đã mất chức năng bài tiết.",
    "luuy": [
     "Liên hệ đơn vị thận nhân tạo sớm, không chờ nội khoa thất bại hoàn toàn.",
     "Kali có thể tăng lại sau lọc do kali từ trong tế bào đi ra. Xét nghiệm lại sau cuộc lọc."
    ]
   }
  ],
  "radon": [
   { "ten": "Ức chế men chuyển, chẹn thụ thể AT1", "xuly": "Tạm ngừng, đánh giá lại khi kali về bình thường" },
   { "ten": "Spironolacton, eplerenon, amilorid", "xuly": "Ngừng" },
   { "ten": "NSAID", "xuly": "Ngừng" },
   { "ten": "Heparin, kể cả LMWH", "xuly": "Cân nhắc thay thuốc chống đông khác" },
   { "ten": "Co-trimoxazol, trimethoprim", "xuly": "Cân nhắc đổi kháng sinh" },
   { "ten": "Tacrolimus, cyclosporin", "xuly": "Định lượng nồng độ trước khi chỉnh liều" },
   { "ten": "Chẹn beta không chọn lọc", "xuly": "Cũng làm giảm đáp ứng với salbutamol" },
   { "ten": "Digoxin", "xuly": "Định lượng nồng độ — tăng kali ở đây là dấu hiệu ngộ độc nặng" },
   { "ten": "Dịch và thuốc chứa kali", "xuly": "Ringer lactat, KCl, penicillin G kali, dinh dưỡng tĩnh mạch" },
   { "ten": "Kali uống, muối thay thế chứa kali", "xuly": "Hỏi cả thuốc và thực phẩm chức năng bệnh nhân tự dùng" }
  ],
  "theodoi": "Kali lại sau 1–2 giờ kể từ khi can thiệp.\nĐường huyết mỗi giờ trong 6 giờ nếu đã dùng insulin.\nECG liên tục đến khi kali < 6,0 mmol/L.\nCalci máu nếu dùng resin muối calci kéo dài.",
  "bay": [
   "Điều trị theo kết quả xét nghiệm mà quên loại trừ tăng kali giả.",
   "Dùng calci gluconat rồi coi như xong — kali tăng lại sau 30–60 phút.",
   "Calci gluconat và bicarbonat chung dây truyền gây kết tủa.",
   "Lấy insulin bằng bơm tiêm 1 mL thay vì bơm tiêm insulin.",
   "Chỉ đẩy kali vào tế bào mà không có biện pháp thải kali.",
   "Bỏ sót Ringer lactat vẫn đang chảy trong khi tích cực hạ kali."
  ],
  "tltk": [
   {
    "loai": "BYT",
    "ten": "Hướng dẫn chẩn đoán và điều trị một số bệnh về thận – tiết niệu",
    "chitiet": "Quyết định 3931/QĐ-BYT ngày 21/9/2015 — bài Tăng kali máu trong bệnh thận",
    "url": "http://canhgiacduoc.org.vn/Hotro/daotao/558/H%C6%B0%E1%BB%9Bngd%E1%BA%ABnch%E1%BA%A9n%C4%91o%C3%A1nv%C3%A0%C4%91i%E1%BB%81utr%E1%BB%8Bm%E1%BB%99ts%E1%BB%91b%E1%BB%87nhv%E1%BB%81Th%E1%BA%ADnTi%E1%BA%BFtni%E1%BB%87u.htm"
   },
   {
    "loai": "BYT",
    "ten": "Hướng dẫn chẩn đoán và xử trí hồi sức tích cực",
    "chitiet": "Quyết định 1493/QĐ-BYT ngày 22/4/2015",
    "url": "http://canhgiacduoc.org.vn/Hotro/daotao/491/H%C6%B0%E1%BB%9Bng-d%E1%BA%ABn-ch%E1%BA%A9n-%C4%91o%C3%A1n-v%C3%A0-x%E1%BB%AD-tr%C3%AD-h%E1%BB%93i-s%E1%BB%A9c-t%C3%ADch-c%E1%BB%B1c-.htm"
   },
   {
    "loai": "BYT",
    "ten": "Dược thư Quốc gia Việt Nam",
    "chitiet": "Quyết định 3445/QĐ-BYT ngày 23/12/2022 — chuyên luận từng hoạt chất",
    "url": ""
   },
   {
    "loai": "QT",
    "ten": "UK Kidney Association — Treatment of Acute Hyperkalaemia in Adults",
    "chitiet": "Bản cập nhật 10/2023",
    "url": "https://www.ukkidney.org/health-professionals/guidelines/treatment-acute-hyperkalaemia-adults-0"
   }
  ],
  "ngaycapnhat": "18/08/2026",
  "soat": false
 }
];
