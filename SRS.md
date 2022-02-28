**SYSTEM SRS DOCUMENT**

* Full document: /document/srs-document.doc
* No English version now



=*= VIETNAMESE VERSION =*=

**TÀI LIỆU SRS**

*Đề tài: DASHBOARD QUẢN LÝ ĐIỆN NĂNG DỰA TRÊN SỐ LIỆU TỪ SERVER MQTT*

Thực hiện bởi NHÓM 3:

1.	Nguyễn Anh Kiệt.	MSSV: 1851062658.	Lớp: S21- 60TH1
2.	Nguyễn Thị Giao Linh.   MSSV: 1851062815.	Lớp: S21-60TH1
3.	Trần Thị Bích Ngọc.	MSSV: 1851062787.	Lớp: S21-60TH1
4.	Nguyễn Yến Linh.	MSSV: 1851062815.	Lớp: S21-60TH2



**LỜI MỞ ĐẦU**

Các doanh nghiệp ngày càng chịu áp lực trong việc điều chỉnh để phù hợp với thị trường chuyển đổi số cạnh tranh khốc liệt. Duy trì lợi thế cạnh tranh là cần thiết hơn bao giờ hết, nên các công ty đang nhanh chóng áp dụng phương pháp quản lý dự án linh hoạt và việc tiếp cận thông tin phù hợp một cách kịp thời. Do đó, các nhà quản lý dự án ngày càng ưa chuộng sử dụng hình thức dashboard để dễ dàng quản lý cũng như tổng hợp tức thì những thông tin hoạt động liên quan đến hệ thống thông tin. Vì lẽ đó, dự án dashboard dữ liệu điện năng từ máy chủ MQTT sẽ là một hình thức hứa hẹn mang lại nhiều tiện ích cho người quản lý các thiết bị IoT thay cho các hình thức truyền thống, nâng cao năng suất công việc.

**I.	GIỚI THIỆU**

*1.	Mục đích:*
●	Xây dựng dashboard cho phép thấy được bức ảnh hệ thống đang vận hành một cách nhanh chóng & toàn diện nhất qua các dữ liệu gửi về từ máy chủ MQTT.
●	Thống kê dữ liệu lâu dài, lập báo cáo dữ liệu hằng tuần, hằng tháng, hằng năm. Mở rộng các tính năng tiện ích liên quan như tính toán chi phí điện thông qua một giao diện tương tác duy nhất

*2.	Phạm vi:*
Quản lý dữ liệu từ các nguồn topic gửi từ các client thông qua dữ liệu nhận được từ broker, trong đó:
-	MQTT Broker: Được cung cấp dưới dạng mã nguồn mở hoặc các phiên bản thương mại, có thể đi kèm với các dịch vụ điện toán đám mây. Công việc của Broker là lọc các tin nhắn dựa trên topic, sau đó phân phối các tin nhắn đến các thiết bị/ứng dụng đã đăng ký topic đó. Các bạn có thể tham khảo một số MQTT Broker như: HiveMQ , Mosquitto, MQTTRoute, Jmqtt, … 
-	MQTT Client: Là các thiết bị/ứng dụng Client kết nối đến Broker để thực hiện truyền nhận dữ liệu. Hiện nay có rất nhiều mã nguồn mở MQTT Client được viết dưới nhiều ngôn ngữ khác nhau như HiveMQ MQTT Client được phát triển dựa trên ngôn ngữ Java, Eclipse Paho dựa trên C/C++, Python, …
-	Topic: Mỗi MQTT Client thực hiện truyền/nhận dữ liệu với nhau thông qua các Topic được quản lý bởi Broker. Một Client đăng ký nhận dữ liệu được gọi là một Subcriber còn một Client gửi dữ liệu đi được gọi là một Publisher. Để nhận dữ liệu từ Publisher, đầu tiên Subcriber phải subscribe (đăng ký theo dõi) đến một Topic, sau đó bất cứ Client nào publish dữ liệu đến đúng Topic, thì Broker sẽ lọc và chuyển tiếp gói tin đến đúng Subscriber đó. Một Client có thể subscribe hoặc publish đến nhiều Topic khác nhau.

*3.	Định nghĩa:*
-	Dashboard là báo cáo tiến độ dưới dạng trực quan hóa dữ liệu (data visualization) bằng cách kết nối với các nguồn dữ liệu, các tệp, tệp đính kèm, dịch vụ và API của doanh nghiệp bạn, và sau đó hiển thị tất cả dữ liệu này dưới dạng bảng, biểu đồ đường, biểu đồ thanh.
-	MQTT (Message Queuing Telemetry Transport) là giao thức truyền thông điệp (message) theo mô hình publish/subscribe (cung cấp / thuê bao), được sử dụng cho các thiết bị IoT với băng thông thấp, độ tin cậy cao và khả năng được sử dụng trong điều kiện mạng không ổn định. Nó dựa trên một Broker (tạm dịch là “Máy chủ môi giới”) “nhẹ” (khá ít xử lý) và được thiết kế có tính mở (tức là không đặc trưng cho ứng dụng cụ thể nào), đơn giản và dễ cài đặt.
 

**II. MÔ TẢ CHUNG**

*1. Tổng quan về sản phẩm*
    Sản phẩm là sự chuyển hóa về công nghệ của mô hình quản lý đơn thuần trên máy tính, giảm sai sót trong quá trình thực hiện giám sát thủ công. Thông qua các tính năng của phần mềm có thể giúp người quản lý xem được các biểu đồ hoạt động, kiểm soát được toàn bộ các thông tin liên quan đến điện năng đã sử dụng và có những sự can thiệp nếu có sự quá tải xảy ra.
*2. Chức năng sản phẩm*
- Quản lý, giám sát toàn bộ hệ thống
- Cho phép kiểm soát nguồn thông tin của các thiết bị có trên hệ thống.
- Cho phép tính toán điện năng tiêu thụ tại một nơi nằm trong hệ thống trong một thời điểm bất kỳ
- Chức năng sao lưu dữ liệu tự động và thường xuyên.
- Cho phép so sánh, phân loại các vùng dữ liệu khác nhau từ các thiết bị và phòng khác nhau

*3. Đối tượng người dùng*
- Người quản lý các thiết bị IoT

*4. Ràng buộc tổng thể*

a. Ràng buộc về phần cứng
- Không yêu cầu cao, có thể chạy được trên các thiết bị có mặt trên thị trường hiện tại

b. Môi trường sử dụng
- Là một sản phẩm WebApp: hỗ trợ truy cập từ bất kỳ nền tảng nào có trình duyệt internet hỗ trợ HTML5 và Javascript

c. Yêu cầu kết nối với các hệ thống khác	
- Yêu cầu kết nối hệ thống MQTT để lấy data và có thể cập nhật data thường xuyên

**III. YÊU CẦU CHI TIẾT**

*1. Yêu cầu chức năng*

a. Chức năng lọc tìm kiếm dữ liệu
- Tùy theo nhu cầu của người quản trị viên mà chức năng lọc tìm kiếm có thể hiển thị theo: ngày, tuần, tháng, quý, năm.
- Cho phép lọc dữ liệu theo phòng hoặc từng thiết bị để hiển thị

b. Chức năng biểu đồ các thông số điện
- Chức năng xây dựng các biểu đồ trực quan của thông số sẽ giúp quản trị viên có có thể so sánh dữ liệu trong nhiều thời điểm khác nhau.

c. Chức năng tính toán hóa đơn tiền điện theo mục đích, cấp bậc
- Thực hiện tính toán hóa đơn tiền điện theo tháng bằng những dữ liệu thu thập được của mỗi đơn vị sử dụng
- Tính toán thời gian trung bình sử dụng điện theo từng mục đích sử dụng, theo quy chuẩn cấp bậc của điện lực Việt Nam

d. Chức năng cập nhật dữ liệu liên tục
- Dữ liệu sẽ được cập nhật liên tục bằng hệ thống thời gian thực mỗi khi có thay đổi từ máy chủ MQTT
- Dữ liệu nhận được lập tức lưu về cơ sở dữ liệu để lưu trữ và hiển thị lên biểu đồ thời gian thực nếu cầu thiết

e. Chức năng cảnh báo khi có sự quá tải
- Dữ liệu được cập nhật thường xuyên nên hệ thống sẽ đưa ra những cảnh báo khi lượng điện tiêu thụ trên hệ thống cập nhật vượt quá mức bình thường (20%-30%)

*2. Yêu cầu giao diện ngoài*
-	Hỗ trợ hiển thị biểu đồ trực tiếp trên nền web
-	Hiển thị các menu trực quan để người sử dụng có thể dễ dàng thao tác

*3. Yêu cầu hiệu suất*
•	Đảm bảo hệ thống hoạt động xuyên suốt 24/24 để có thể nhận về tất cả dữ liệu từ máy chủ MQTT
•	Các biểu đồ số liệu, dữ liệu cần cập nhật liên tục thời gian thực và theo thời gian nhất định được định trước

*4. Thuộc tính*

a. Tính bảo mật hệ thống
- Chỉ người quản trị các thiết bị IoT mới có thể đăng nhập vào hệ thống theo thông tin đăng nhập cho trước
- Bảo vệ dữ liệu thông tin cá nhân và số liệu hiển thị để người quản lý thiết bị IoT không thể tùy ý chỉnh sửa mà chỉ có quyền xem.
- Lấy dữ liệu từ máy chủ MQTT theo một tài khoản và mật khẩu riêng được tích hợp sẵn trong mã nguồn và không thể tùy tiện thay đổi

b.  Tính an toàn thông tin
- Thông tin mật khẩu đăng nhập lưu trữ trên cơ sở dữ liệu phải mã hóa an toàn
- Liên kết giữ hệ thống và người dùng phải sử dụng HTTPS

c. Tính bảo trì
- Thường xuyên rà soát các lỗ hổng trên hệ thống
- Thường xuyên lọc dữ liệu, kiểm tra dữ liệu, cập nhật tính chính xác của dữ liệu
- Kiểm tra mã nguồn và nâng cấp phiên bản khung dịch vụ, công nghệ mới cho hệ thống theo định kỳ
- Đảm bảo việc bảo trì định kỳ của hệ thống phần cứng./.
