# Exercises of week 01
### I. Cài đặt môi trường  
- [x] Cài đặt extension: Simple React Snippets 
    ![alt text](./ex01-img01.png)
- [x] Cài đặt NodeJS và Git scm
    - Cài đặt NodeJS: https://nodejs.org/en/download/
    - Cài đặt Git scm: https://git-scm.com/
- [x] Cài đặt react developer tools và redux dev tool trên tiện ích
    - React developer tools
    ![alt text](./ex01-img02.png)
    - Redux DevTools
    ![alt text](./ex01-img03.png)
### II. Tìm hiểu ReactJS, SPA/MPA, JSX
##### 1. ReactJS là gì?
 - [x] ReactJS là một opensource được phát triển bởi Facebook, ra mắt vào năm 2013, bản thân nó là một thư viện javascript dùng để xây dựng UI, UI ở đây được dùng chính ở 2 nền tảng Web và Mobile. Ở lĩnh vực Web, sử dụng Reactjs có thể đem lại trải nghiệm tốt cho người dùng, cũng như khả năng Hot Reload giúp bạn lập trình nhanh hơn.
##### 2. SPA/MPA: (Tham khảo: https://www.youtube.com/watch?v=30sMCciFIAM)
- [x] SPA - Single-Page Application
    - Được cho là cách tiếp cận hiện đại hơn
    - Không yêu cầu tải lại trang trong quá trình sử dụng
    - Kiến trúc 1 trang
    - Nhanh hơn khi sử dụng (vì tải hết 1 lần và lưu tại RAM) vì phần lớn tài nguyên chỉ tải trong lần đầu và chỉ tải thêm dữ liệu mới khi cần
    - Nhưng lần đầu tải có thể bị chậm nếu tối ưu không tốt
    - Không thân thiện với SEO hay Search Engine Optimization (tối ưu hóa công cụ tìm kiếm)
    - VD: Facebook, Shoppe, ZingMP3

- [x] MPA - Multi-Page Application
    - Cách tiếp cận cổ điển
    - Tải lại trang trong quá trình sử dụng
    - Chậm hơn khi sử vì luôn tải lại toàn bộ khi truy cập và điều hướng
    - Thân thiện với SEO
    - VD: các trang báo mạng
### III. Khởi tạo dự án, tìm hiểu về components
##### 1. Khởi tạo dự án (tham khảo: https://create-react-app.dev/docs/getting-started/)
- [x] Với npm: 
    ```sh
    npm init react-app my-app
    ```
- [x] Với npx:
    ```sh
    npx create-react-app my-app
    cd my-app
    npm start
    ```
- [x] Với yarn
    ```sh
    yarn create react-app my-app
    ```

##### 2. Components
- Cho phép chúng ta chia nhỏ UI để tái sử dụng (header, footer, button,card, …)
- Chia càng nhỏ càng dễ quản lý




