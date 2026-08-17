/* Chủ đề lâm sàng — biên soạn nội bộ khoa Dược, Bệnh viện Đại học Phenikaa.
   KHÔNG phải văn bản đã ban hành. Tệp do màn hình Biên tập sinh ra.
   Tra cứu theo vấn đề lâm sàng, góc nhìn dược sĩ lâm sàng. */

const CHUDE_VERSION = "2026-08-17";

const CHUDE = [
 {
  "id": "tang-kali-mau",
  "ten": "Tăng kali máu",
  "nhom": "Rối loạn điện giải",
  "tukhoa": "hyperkalemia hyperkalaemia kali cao K+ ure huyet",
  "nguong": "K⁺ ≥ 6,5 mmol/L hoặc có biến đổi ECG ở bất kỳ mức kali nào → xử trí cấp cứu ngay, không chờ xét nghiệm lại.\nLuôn loại trừ tăng kali giả trước khi can thiệp: mẫu vỡ hồng cầu, garo quá lâu, bệnh nhân nắm chặt tay khi lấy máu, tăng tiểu cầu hoặc bạch cầu rất cao.",
  "coche": "Khoảng 98% kali của cơ thể nằm trong tế bào. Chênh lệch nồng độ trong và ngoài tế bào tạo nên điện thế nghỉ của màng, khoảng −90 mV ở cơ tim.\nKhi kali ngoại bào tăng, chênh lệch này giảm, điện thế nghỉ bớt âm đi, tức màng bị khử cực một phần. Ban đầu tế bào dễ kích thích hơn, nhưng khi khử cực kéo dài thì kênh natri phụ thuộc điện thế bị bất hoạt, dẫn đến giảm tính kích thích và dẫn truyền chậm lại.\nDiễn tiến trên ECG phản ánh đúng quá trình đó: sóng T cao nhọn → khoảng PR kéo dài, sóng P dẹt rồi mất → phức bộ QRS giãn rộng → sóng hình sin → rung thất hoặc vô tâm thu.\nBa hướng can thiệp tương ứng ba đích khác nhau: đối kháng tác dụng của kali lên màng tim, chuyển kali từ ngoài vào trong tế bào, và thải kali ra khỏi cơ thể. Chỉ hướng thứ ba làm giảm tổng lượng kali; hai hướng đầu chỉ mua thời gian.",
  "bac": [
   { "ma": "nhe",  "nhan": "Nhẹ",       "khoang": "5,5 – 5,9 mmol/L" },
   { "ma": "tb",   "nhan": "Trung bình", "khoang": "6,0 – 6,4 mmol/L" },
   { "ma": "nang", "nhan": "Nặng",      "khoang": "≥ 6,5 hoặc ECG biến đổi" }
  ],
  "thuoc": [
   {
    "ten": "Calci gluconat",
    "vaitro": "Đối kháng tác dụng trên màng tim",
    "bac": ["nang"],
    "lieu": "Dung dịch 10%: 10–20 mL, tiêm tĩnh mạch chậm trong 5–10 phút.\nNếu ECG chưa cải thiện, nhắc lại sau 5–10 phút.",
    "khoiphat": "1–3 phút",
    "keodai": "30–60 phút",
    "coche": "Ion calci ngoài tế bào đẩy ngưỡng điện thế của tế bào cơ tim về phía dương, khôi phục lại khoảng cách giữa điện thế nghỉ đã bị khử cực và ngưỡng khởi phát điện thế hoạt động. Nhờ đó tính kích thích và dẫn truyền trở lại bình thường mà nồng độ kali máu không thay đổi chút nào.",
    "luuy": [
     "Không hạ kali máu. Bắt buộc phải kèm biện pháp chuyển kali vào tế bào và biện pháp thải kali, nếu không kali sẽ tăng trở lại khi hết tác dụng.",
     "Tương kỵ với natri bicarbonat và dung dịch chứa phosphat, tạo tủa calci carbonat hoặc calci phosphat. Tráng dây truyền bằng NaCl 0,9% trước và sau khi dùng.",
     "Bệnh nhân đang dùng digoxin: pha loãng trong 100 mL và truyền trong 20–30 phút để tránh làm nặng thêm độc tính trên tim.",
     "Ưu tiên tĩnh mạch lớn. Thoát mạch gây hoại tử mô.",
     "Calci clorid chứa lượng calci nguyên tố gấp khoảng ba lần calci gluconat cùng thể tích và gây kích ứng tĩnh mạch mạnh hơn nhiều. Không thay thế cho nhau theo tỷ lệ 1:1."
    ]
   },
   {
    "ten": "Insulin regular",
    "vaitro": "Chuyển kali vào trong tế bào",
    "bac": ["tb", "nang"],
    "lieu": "10 đơn vị insulin regular tiêm tĩnh mạch, kèm 25 g glucose (50 mL glucose 50% hoặc 125 mL glucose 20%).\nNếu đường huyết > 15 mmol/L: dùng insulin đơn độc, không cần glucose.\nCân nhắc giảm còn 5 đơn vị ở bệnh nhân nhẹ cân, suy thận nặng hoặc tiền sử hạ đường huyết.",
    "khoiphat": "10–20 phút",
    "keodai": "4–6 giờ, đỉnh tác dụng 30–60 phút",
    "coche": "Insulin gắn vào thụ thể ở màng tế bào cơ vân và hoạt hóa bơm Na⁺/K⁺-ATPase, bơm kali từ dịch ngoại bào vào trong tế bào. Tác dụng này độc lập với việc glucose đi vào tế bào — glucose chỉ được cho kèm để phòng hạ đường huyết, không phải để thuốc có tác dụng. Hiểu đúng điểm này là lý do vì sao bệnh nhân tăng đường huyết vẫn dùng insulin đơn độc được.",
    "luuy": [
     "Hạ đường huyết là biến chứng thường gặp nhất và hay xảy ra muộn, sau 1–3 giờ, khi glucose đã hết mà insulin còn tác dụng. Theo dõi đường huyết mao mạch mỗi giờ trong ít nhất 6 giờ.",
     "Lấy insulin bằng bơm tiêm insulin chia đơn vị. Dùng bơm tiêm 1 mL thông thường là nguyên nhân sai liều nghiêm trọng hay gặp nhất với thuốc này.",
     "Chỉ có tác dụng tạm thời do kali chỉ chuyển chỗ chứ không rời khỏi cơ thể. Phải kèm biện pháp thải kali."
    ]
   },
   {
    "ten": "Salbutamol",
    "vaitro": "Chuyển kali vào trong tế bào",
    "bac": ["tb", "nang"],
    "lieu": "Khí dung 10–20 mg pha trong 4 mL NaCl 0,9%, thở trong khoảng 10 phút.\nDùng phối hợp thêm với insulin–glucose, không dùng đơn độc.",
    "khoiphat": "khoảng 30 phút",
    "keodai": "2–4 giờ",
    "coche": "Kích thích thụ thể beta-2 làm hoạt hóa adenylyl cyclase, tăng AMP vòng nội bào và hoạt hóa protein kinase A, dẫn đến tăng hoạt tính bơm Na⁺/K⁺-ATPase. Cơ chế đích giống insulin nhưng đi qua con đường tín hiệu khác, nên phối hợp hai thuốc cho hiệu quả cộng hợp.",
    "luuy": [
     "Liều dùng ở đây gấp khoảng 4–8 lần liều giãn phế quản thông thường. Điều dưỡng và bác sĩ thường nghi ngờ khi thấy y lệnh — cần chủ động giải thích trước.",
     "Khoảng 20–40% bệnh nhân không đáp ứng, đặc biệt là người đang dùng thuốc chẹn beta. Đây là lý do không dùng đơn độc.",
     "Gây nhịp nhanh và run tay. Thận trọng ở bệnh nhân bệnh mạch vành hoặc rối loạn nhịp nhanh."
    ]
   },
   {
    "ten": "Natri bicarbonat",
    "vaitro": "Chuyển kali vào trong tế bào",
    "bac": ["nang"],
    "lieu": "Chỉ dùng khi có toan chuyển hóa kèm theo. Liều theo mức độ toan và cân nặng.\nKhông dùng thường quy cho tăng kali máu đơn thuần.",
    "khoiphat": "chậm, hàng giờ",
    "keodai": "thay đổi",
    "coche": "Tăng pH máu làm ion H⁺ đi từ trong tế bào ra ngoài để đệm; kali đi vào trong tế bào để cân bằng điện tích. Cơ chế này phụ thuộc hoàn toàn vào việc bệnh nhân có toan hay không.",
    "luuy": [
     "Gần như không hiệu quả ở bệnh nhân lọc máu không có toan chuyển hóa.",
     "Tương kỵ trực tiếp với calci gluconat — tuyệt đối không dùng chung dây truyền, phải tráng dây giữa hai thuốc.",
     "Đưa vào lượng natri đáng kể, thận trọng ở bệnh nhân suy tim hoặc quá tải dịch."
    ]
   },
   {
    "ten": "Furosemid",
    "vaitro": "Thải kali khỏi cơ thể",
    "bac": ["nhe", "tb", "nang"],
    "lieu": "20–40 mg tiêm tĩnh mạch. Bệnh nhân bệnh thận mạn thường cần liều cao hơn.\nBảo đảm đủ thể tích tuần hoàn trước khi dùng.",
    "khoiphat": "15–30 phút nếu thận còn đáp ứng",
    "keodai": "4–6 giờ",
    "coche": "Ức chế kênh đồng vận chuyển Na⁺-K⁺-2Cl⁻ ở nhánh lên quai Henle. Lượng natri và dịch đến ống lượn xa tăng lên, làm tăng bài tiết kali qua kênh ROMK ở tế bào chính của ống góp. Vì vậy thuốc chỉ có tác dụng khi thận còn chức năng bài tiết.",
    "luuy": [
     "Vô hiệu ở bệnh nhân vô niệu hoặc thiểu niệu nặng — trường hợp này phải nghĩ đến lọc máu.",
     "Gây mất dịch và mất magnesi, theo dõi thể tích tuần hoàn và điện giải đồ.",
     "Không đủ mạnh để dùng đơn độc trong tăng kali máu nặng."
    ]
   },
   {
    "ten": "Calci polystyren sulfonat",
    "vaitro": "Thải kali khỏi cơ thể",
    "bac": ["nhe", "tb"],
    "lieu": "Uống 15–30 g mỗi ngày, chia 2–3 lần, mỗi lần pha trong 30–50 mL nước.\nKhông pha bằng nước hoa quả vì nước hoa quả chứa kali.",
    "khoiphat": "vài giờ",
    "keodai": "kéo dài trong thời gian dùng thuốc",
    "coche": "Nhựa trao đổi cation. Khi đi qua đường tiêu hóa, đặc biệt là đại tràng nơi nồng độ kali cao nhất, nhựa nhả ion calci và giữ lấy ion kali, sau đó được thải nguyên vẹn theo phân. Thuốc không được hấp thu vào máu. Vì phụ thuộc thời gian lưu trong ruột nên khởi phát chậm và không có vai trò trong cấp cứu.",
    "luuy": [
     "Hướng dẫn UKKA bản 2023 đã bỏ resin khỏi phác đồ xử trí cấp, thay bằng natri zirconium cyclosilicat và patiromer. Hai thuốc mới này hiện chưa sẵn có tại Việt Nam, còn resin vẫn có trong Dược thư Quốc gia và vẫn được dùng phổ biến. Cần biết sự khác biệt này khi trao đổi với bác sĩ.",
     "Không phối hợp với sorbitol — nguy cơ hoại tử ruột.",
     "Uống cách các thuốc khác ít nhất 3 giờ, ít nhất 6 giờ nếu bệnh nhân có liệt dạ dày, vì nhựa gắn cả thuốc khác.",
     "Chống chỉ định khi tắc ruột hoặc giảm nhu động ruột, và ở trẻ sơ sinh đường uống.",
     "Dạng muối calci: chống chỉ định khi có nguy cơ tăng calci máu (cường cận giáp, đa u tủy xương, sarcoidosis, ung thư di căn). Theo dõi calci máu khi dùng kéo dài.",
     "Ngừng thuốc khi kali máu xuống dưới 5 mmol/L."
    ]
   },
   {
    "ten": "Lọc máu",
    "vaitro": "Thải kali khỏi cơ thể",
    "bac": ["nang"],
    "lieu": "Không phải thuốc. Chỉ định khi tăng kali nặng kèm vô niệu hoặc thiểu niệu, kali không đáp ứng với điều trị nội khoa, hoặc có kèm quá tải dịch, toan nặng.",
    "khoiphat": "ngay khi bắt đầu lọc",
    "keodai": "phụ thuộc cuộc lọc",
    "coche": "Loại kali trực tiếp khỏi máu theo chênh lệch nồng độ qua màng lọc. Đây là biện pháp duy nhất chắc chắn hạ được kali khi thận đã mất chức năng bài tiết.",
    "luuy": [
     "Liên hệ đơn vị thận nhân tạo sớm, không chờ đến khi các biện pháp nội khoa thất bại hoàn toàn.",
     "Kali có thể tăng trở lại sau lọc do kali từ trong tế bào đi ra. Xét nghiệm lại sau khi kết thúc cuộc lọc."
    ]
   }
  ],
  "radon": [
   { "ten": "Ức chế men chuyển, chẹn thụ thể AT1", "xuly": "Tạm ngừng trong đợt cấp, đánh giá lại khi kali về bình thường" },
   { "ten": "Spironolacton, eplerenon, amilorid", "xuly": "Ngừng" },
   { "ten": "NSAID, kể cả đường bôi và đường tiêm", "xuly": "Ngừng" },
   { "ten": "Heparin, kể cả heparin trọng lượng phân tử thấp", "xuly": "Cân nhắc thay bằng thuốc chống đông khác" },
   { "ten": "Co-trimoxazol, trimethoprim", "xuly": "Cân nhắc đổi kháng sinh, đặc biệt khi dùng liều cao" },
   { "ten": "Tacrolimus, cyclosporin", "xuly": "Định lượng nồng độ thuốc, hội chẩn trước khi chỉnh liều" },
   { "ten": "Chẹn beta không chọn lọc", "xuly": "Đánh giá lại chỉ định; cũng làm giảm đáp ứng với salbutamol" },
   { "ten": "Digoxin liều cao hoặc ngộ độc digoxin", "xuly": "Định lượng nồng độ; tăng kali ở đây là dấu hiệu ngộ độc nặng" },
   { "ten": "Dịch truyền và thuốc chứa kali", "xuly": "Rà toàn bộ y lệnh: Ringer lactat, kali clorid, penicillin G kali, dinh dưỡng tĩnh mạch" },
   { "ten": "Thuốc bổ sung kali đường uống, muối thay thế chứa kali", "xuly": "Ngừng; hỏi kỹ cả thuốc và thực phẩm chức năng bệnh nhân tự dùng" }
  ],
  "theodoi": "Xét nghiệm lại kali sau 1–2 giờ kể từ khi bắt đầu can thiệp, sau đó theo diễn biến.\nĐường huyết mao mạch mỗi giờ trong ít nhất 6 giờ nếu đã dùng insulin.\nTheo dõi ECG liên tục cho đến khi kali về dưới 6,0 mmol/L và ECG trở về bình thường.\nĐiện giải đồ và chức năng thận hằng ngày cho đến khi ổn định.\nCalci máu nếu dùng resin muối calci kéo dài.",
  "bay": [
   "Điều trị theo kết quả xét nghiệm mà quên loại trừ tăng kali giả, dẫn đến can thiệp trên bệnh nhân thực ra không tăng kali.",
   "Dùng calci gluconat rồi coi như đã xử trí xong. Calci không hạ kali, kali sẽ tăng trở lại sau 30–60 phút.",
   "Dùng calci gluconat và natri bicarbonat chung dây truyền gây kết tủa.",
   "Lấy insulin bằng bơm tiêm 1 mL thay vì bơm tiêm insulin, dẫn đến quá liều nghiêm trọng.",
   "Ngừng theo dõi đường huyết sau 1–2 giờ, bỏ sót hạ đường huyết muộn.",
   "Chỉ chuyển kali vào tế bào mà không có biện pháp thải kali — kali sẽ tăng trở lại sau vài giờ.",
   "Bỏ sót Ringer lactat vẫn đang chảy trong khi tích cực hạ kali.",
   "Dùng furosemid cho bệnh nhân vô niệu và chờ đợi tác dụng."
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
    "chitiet": "Quyết định 3445/QĐ-BYT ngày 23/12/2022 — chuyên luận Polystyren sulfonat, Calci gluconat, Insulin, Salbutamol, Furosemid",
    "url": ""
   },
   {
    "loai": "QT",
    "ten": "UK Kidney Association — Clinical Practice Guideline: Treatment of Acute Hyperkalaemia in Adults",
    "chitiet": "Bản cập nhật tháng 10/2023",
    "url": "https://www.ukkidney.org/health-professionals/guidelines/treatment-acute-hyperkalaemia-adults-0"
   }
  ],
  "ngaycapnhat": "17/08/2026",
  "soat": false
 }
];
