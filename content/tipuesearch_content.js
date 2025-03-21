var tipuesearch = {"pages": [{'title': 'About', 'text': '課程名稱: 協同產品設計實習 - Collaborative Product Design Practice \n 學員作業網站: https://mdecd2025.github.io/hw-41223134 \n 學員作業倉儲: https://github.com/mdecd2025/hw-41223134 \n \n 課程代號: cd2025 \n Teams 線上教學: \n 以 "學號@nfu.edu.tw" 登入 \xa0 https://login.microsoftonline.com/ \xa0 Office 365 \n Teams 團隊代碼:\xa0 p5z4eku \n \n 課程評分: \n Homework (30%) - 每週至少提交兩次與課程進度有關的內容, 完成後填回自評表單 \n Exam (40%) - 建立包含操作流程影片、心得以及提供檔案下載的網頁後填回自評表單 \n Final Report (30%) - 利用網頁內容進行簡報並提交 pdf 格式書面報告, 完成後填回自評表單 \n', 'tags': '', 'url': 'About.html'}, {'title': '上課內容', 'text': '', 'tags': '', 'url': '上課內容.html'}, {'title': 'w1', 'text': '\n \n # 從  Brython 程式庫中的 browser 導入 html, 可用來輸出超文件內容\n# 而所導入的 document 可以指向網頁中的特定 id 內容\nfrom browser import html, document\n# 建立 url 變數與網站中 2a 學員的學號與帳號資料 URL 網誌字串對應\nurl = "https://mde.tw/list/2a.txt"\n# 利用 open() 物件中的 readlines() 方法, 取出網站中的資料並逐行放入數列中, 因此 data 的資料型別為數列\ndata = open(url).readlines()\n# 進行資料查驗時, 印出 data 數列內容\n#print(data)\n# 因為學員資料中的第一列為標題, 因此有效資料從索引值 1 開始\nall_stud = data[1:]\n# 利用 len() 函式查驗 all_stud 數列有幾筆資料, 因為要與前後的字串併接, 因此利用 str() 將整數轉為字串\nprint("總共有 " + str(len(all_stud)) + "名學員")\n# \n# 利用 document[] 取得 id 為 "brython_div1" 的位置, 然後與 brython_div1 變數對應\nbrython_div1 = document["brython_div1"]\n# 利用 Brython 的 "<=" 特殊符號, 將右值帶有字串與超文件內容物件插入 brython_div1 變數所指定的位置\n# 其中利用 html.A 建立 anchor 標註物件, 第一個變數為 anchor 字串, 第二個變數則為 hyper text reference\nbrython_div1 <= "1. " + html.A("2a-ag4", href="https://mdecd2025.github.io/2a-ag4/")+ html.A("(repo)", href="https://github.com/mdecd2025/2a-ag4")\n# 利用 html.BR() 插入 break 標註\nbrython_div1 <= html.BR()\nbrython_div1 <= "2. " + html.A("41223118", href="https://mdecd2025.github.io/hw-zhe41223118/")+ html.A("(repo)", href="https://github.com/mdecd2025/hw-zhe41223118")\nbrython_div1 <= html.BR()\nbrython_div1 <= "3. " + html.A("41223122", href="https://mdecd2025.github.io/hw-Spirit0224/")+ html.A("(repo)", href="https://github.com/mdecd2025/hw-Spirit0224")\nbrython_div1 <= html.BR()\nbrython_div1 <= "4. " + html.A("41223131", href="https://https://mdecd2025.github.io/hw-yuhao-08/")+ html.A("(repo)", href="https://github.com/mdecd2025/hw-yuhao-08")\nbrython_div1 <= html.BR()\nbrython_div1 <= "5. " + html.A("41223134", href="https://https://mdecd2025.github.io/hw-41223134")+ html.A("(repo)", href="https://github.com/mdecd2025/hw-41223134")\nbrython_div1 <= html.BR()\nbrython_div1 <= "6. " + html.A("41223136", href="https://mdecd2025.github.io/hw-41223136/")+ html.A("(repo)", href="https://github.com/mdecd2025/hw-41223136")\nbrython_div1 <= html.BR()\nbrython_div1 <= "7. " + html.A("41223158", href="https://mdecd2025.github.io/hw-41223158")+ html.A("(repo)", href="https://github.com/mdecd2025/hw-41223158") \n 1.  2a-ag4 (repo) 2.  41223118 (repo) 3.  41223122 (repo) 4.  41223131 (repo) 5.  41223134 (repo) 6.  41223136 (repo) 7.  41223158 (repo) \n', 'tags': '', 'url': 'w1.html'}, {'title': 'w3', 'text': '', 'tags': '', 'url': 'w3.html'}, {'title': 'w4', 'text': '', 'tags': '', 'url': 'w4.html'}, {'title': 'w5', 'text': '', 'tags': '', 'url': 'w5.html'}, {'title': 'Webots簡介摘要', 'text': '\n \n What is Webots?  Webots is a professional mobile robot simulation software that provides a rapid prototyping environment. It allows users to create 3D virtual worlds with physics properties (e.g., mass, joints, friction) and add passive or active objects like mobile robots. Users can equip robots with sensors and actuators and program them for desired behaviors. It offers numerous robot models, examples, and interfaces to transfer simulations to real robots like e-puck or Nao. \n \n \n \n What can I do with Webots?  Webots is ideal for research and education in mobile robotics, supporting projects like robot prototyping (e.g., academic, automotive, toy industries), locomotion research (legged, humanoid robots), multi-agent studies (swarm intelligence, collaborative robots), and adaptive behavior research (genetic algorithms, AI). It’s also used for teaching robotics and robot competitions. \n \n \n \n What do I need to know to use Webots?  Basic knowledge of C, C++, Java, Python, or MATLAB is required to program controllers, though beginners can use the graphical BotStudio language for certain robots (e.g., e-puck). To create custom models or environments, familiarity with 3D graphics and VRML97 is needed for designing or importing 3D objects. \n \n \n \n How do I get User Support?  Cyberbotics offers paid support via Premier Service plans and custom development. Community-based support is available through Robotics StackExchange (webots tag), GitHub Discussions (development questions), GitHub Issues (bug reports), and Discord (quick discussions), though responses aren’t guaranteed. \n \n \n \n Webots Simulation  A Webots simulation consists of a world file (.wbt) defining robots and their environment, controller programs (in C/C++/Java/Python/MATLAB), and an optional physics plugin (in C/C++) to adjust physics behavior. World files may rely on external PROTO files and textures. \n \n \n \n What is a World?  A "world" in Webots is a 3D description of robots and their environment, detailing properties like position, geometry, appearance, and physics. Organized hierarchically (like VRML97), world files (.wbt) specify controller names but don’t include the controller code itself. \n \n \n \n What is a Controller?  A controller is a program that directs a robot in a world file, written in C, C++, Java, Python, or MATLAB. Webots launches each controller as a separate process per robot at simulation start. Some languages require compilation (e.g., C/C++), others interpretation (e.g., Python), with files stored in the "controllers" subdirectory. \n \n \n \n What is a Supervisor Controller?  A supervisor controller, tied to a robot with its "supervisor" field set to TRUE, can perform privileged actions (e.g., simulation control, moving robots, recording videos) typically reserved for human operators. Written in any supported language, it has greater capabilities than standard controllers. \n \n', 'tags': '', 'url': 'Webots簡介摘要.html'}, {'title': 'Homework', 'text': '作業 (30%) \n HW1 (5%):  建立由 Box 組成的平面四連桿機構 Webots 模擬場景 \n part1: \n 請各學員在 USB 隨身碟或個人電腦上完成 cd2025 課程所需的可攜系統配置: \n 下載  portable_wcm2025.7z  (330MB, 解開壓縮後 1.4GB) \n Webots_2025a.7z  (1.5 GB, 解開後約為 2.9GB, 可單獨運作) \n Webots_2025a_web.7z  (171 MB, 解開壓縮後約為 1GB, 必須連網運作) \n Blender4.2.7z \n part2: \n 請各學員完成可攜程式系統配置後, 利用 Webots R2025a 中寬度與高度都為 0.1m 的 box 物件建立一個簡單的平面四連桿機構模擬場景. \n base (基座) 長度 1m, link1 長度 0.4m, link2 長度 0.6m, link3 長度 0.9m, 各轉軸均為 HingeJoint, joint1 旋轉速度設定為 1radian/sec. \n part3: \n 模擬場景啟動後, 按下 s 鍵機構開始作動, 按下 p 鍵後機構暫停. \n 參考資料: \n cd2025_hw1_demo.7z \n HW2 (5%):  建立由 CAD 繪製零件組成的平面四連桿機構 Webots 模擬場景 \n 各學員請利用 CAD 系統依據 HW1 的連桿尺寸與運動方式, 配置適當大小的旋轉軸以及基座後, 利用 Webots R2025a 完成一個簡單的平面四連桿機構模擬場景. \n 參考資料: \n fourbar_slvs.7z \n HW3 (20%): 建立 Webots 桌上籃球遊戲機模擬系統 \n 請各分組利用CAD 系統建立一個能在電腦桌 (1600W X 700D X 740H mm) 上運作的投籃機構 ( 參考影片 )後, 導入 Webots R2025a 套件, 建立一個能由使用者透過鍵盤按鍵操作, 且具備計分板的籃球遊戲機模擬系統. \n 參考資料: \n 參考資料: \n fourbar_ball_throwing_linkage.slvs \n sixbar_ball_throwing_linkage.slvs \n \n', 'tags': '', 'url': 'Homework.html'}, {'title': 'HW1', 'text': 'HW1 (5%):  建立由 Box 組成的平面四連桿機構 Webots 模擬場景 \n 操作影片標題: 國立虎尾科技大學 - 機械設計工程系 - cd2025 HW1 - 學員學號 \n \n', 'tags': '', 'url': 'HW1.html'}, {'title': 'HW2', 'text': 'HW2 (5%):  建立由 CAD 繪製零件組成的平面四連桿機構 Webots 模擬場景 \n 操作影片標題: 國立虎尾科技大學 - 機械設計工程系 - cd2025 HW2 - 學員學號 \n \n', 'tags': '', 'url': 'HW2.html'}, {'title': 'HW3', 'text': 'HW3 (20%): 建立 Webots 桌上籃球遊戲機模擬系統 \n 操作影片標題: 國立虎尾科技大學 - 機械設計工程系 - cd2025 HW3 - 學員學號 \n \n', 'tags': '', 'url': 'HW3.html'}, {'title': 'Midterm', 'text': '本課程所繳交的期中成績為學員自評之學習期望成績. \n 期中考週的自評期望成績繳交流程: \n \n 整理先前所完成的各週的進度、作業網頁內容以及心得 \n 拍攝期中自評影片, 上傳至 Youtube 後, 以" 國立虎尾科技大學 - 機械設計工程系 - cd2025 期中自評- 學員學號 "為影片標題後嵌入本頁面中 \n 回填期中自評表單 \n 上傳學員期中成績 \n \n 各週進度: \n 各週網頁內容: \n 期中心得: \n 期中自評影片: \n \n \n', 'tags': '', 'url': 'Midterm.html'}, {'title': 'Exam', 'text': 'Exam1 (10%): 建立 Webots 基本物件模擬場景 \n 各學員利用 Webots R2025a 套件中的 Shape 物件, 隨堂建立指定的機電系統模擬場景, 並利用 Python 程式進行互動控制. \n Exam2 (10%): 利用 CAD 零組件建立模擬場景\xa0 \n 各學員利用 CAD (Solvespace 與 NX2312), 隨堂建立指定的系統模型零組件後, 導入 Webots R2025a 後, 建立機電系統模擬場景, 並利用 Python 程式進行互動控制. \n Exam3 (20%): Webots 機電模擬場景的協同設計 \n 各分組利用 CAD (Solvespace 與 NX2312), 隨堂建立指定的系統模型零組件後, 導入 Webots R2025a 後, 建立機電系統模擬場景, 並利用 Python 程式進行互動控制. 過程中各學員必須採同步協同模式, 維護從 Github Classroom 取得的分組協同倉儲以及網站. \n 協同分組方式: \n \n 分配學員負責利用 Solvespace 建立系統零組件, 過程中必須將所建構之零組件檔案與繪圖過程影片上傳至分組網頁. \n 分配學員負責利用 NX2312 建立系統零組件, 過程中必須將所建構之零組件檔案與繪圖過程影片上傳至分組網頁. \n 分配學員負責利用 Webots 建立機電系統模擬場景, 並利用 Python 程式進行控制, 過程中必須將建構過程拍成帶有說明字幕的影片上傳至分組網頁. \n \n', 'tags': '', 'url': 'Exam.html'}, {'title': 'Exam1', 'text': 'Exam1 (10%): 建立 Webots 基本物件模擬場景 \n 操作影片標題: 國立虎尾科技大學 - 機械設計工程系 - cd2025 Exam1 - 學員學號 \n', 'tags': '', 'url': 'Exam1.html'}, {'title': 'Exam2', 'text': 'Exam2 (10%): 利用 CAD 零組件建立模擬場景 \n 操作影片標題: 國立虎尾科技大學 - 機械設計工程系 - cd2025 Exam2 - 學員學號 \n', 'tags': '', 'url': 'Exam2.html'}, {'title': 'Exam3', 'text': 'Exam3 (20%): Webots 機電模擬場景的協同設計 \n 操作影片標題: 國立虎尾科技大學 - 機械設計工程系 - cd2025 Exam3 - 學員學號 \n', 'tags': '', 'url': 'Exam3.html'}, {'title': 'Final', 'text': '期末協同專案執行過程影片、簡報與 PDf 報告檔案 (六人一組) (30%) \n 題目:  Webots 動態投籃模擬系統的協同設計 \n 說明:  \n 籃框架被配置在一定範圍內, 可隨機慢速前進、後退及左右擺動, 投籃機構系統帶有一定數量的籃球, 被配置在可自由移動的輪車上. \n 操作者可利用鍵盤特定按鍵控制投籃輪車的移動並發射投籃, 每投出一球後系統透過記分板進行計分, 並由送球機構進行補球或移動輪車取球, 遊戲可進行至全部數量籃球投完為止. \n 請將期末協同專案執行過程、內容與心得, 製作成影片，配合字幕上傳至 Youtube 後嵌入各階段的期末報告頁面中. \n 影片標題:  國立虎尾科技大學 - 機械設計工程系 - cd2025 期末報告 - 學員學號 - 各階段影片主題 \n', 'tags': '', 'url': 'Final.html'}, {'title': 'Brython', 'text': '1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};