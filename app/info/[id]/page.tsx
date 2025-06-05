import { CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Star, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Download, Globe } from "lucide-react"

// Полные данные всех программ
const programsInfo = {
  // Сервера
  "open-server": {
    name: "Open Server",
    description: "Локальный веб-сервер для разработки",
    image: "/images/open-server.png",
    category: "Сервера",
    developer: "Open Server Panel Team",
    website: "https://ospanel.io/",
    rating: 4.6,
    downloads: "1M+",
    lastUpdate: "2024-01-20",
    license: "Freeware",
    overview:
      "Open Server Panel — это портативная серверная платформа и программная среда, созданная специально для веб-разработчиков с учётом их рекомендаций и пожеланий. Включает в себя Apache, Nginx, PHP разных версий, MySQL, PostgreSQL и множество других компонентов.",
    features: [
      "Поддержка Apache и Nginx",
      "Множество версий PHP (5.2-8.2)",
      "MySQL и PostgreSQL",
      "Портативность - не требует установки",
      "Простая настройка через GUI",
      "Модульная архитектура",
      "Поддержка SSL/TLS",
      "Встроенные инструменты разработчика",
    ],
    systemRequirements: {
      windows: "Windows 7 или новее",
      mac: "Не поддерживается",
      linux: "Не поддерживается",
      ram: "512 МБ ОЗУ (рекомендуется 1 ГБ)",
      storage: "200 МБ свободного места",
    },
    changelog: [
      {
        version: "5.4.8",
        date: "2024-01-20",
        changes: ["Обновлен PHP до версии 8.2", "Исправлены проблемы с SSL", "Улучшена стабильность работы"],
      },
    ],
  },
  "sql-server-2022": {
    name: "SQL Server 2022",
    description: "Система управления базами данных Microsoft",
    image: "/images/sql-server.png",
    category: "Сервера",
    developer: "Microsoft Corporation",
    website: "https://www.microsoft.com/en-us/sql-server/sql-server-downloads",
    rating: 4.5,
    downloads: "5M+",
    lastUpdate: "2024-01-15",
    license: "Commercial",
    overview:
      "Microsoft SQL Server 2022 — это реляционная система управления базами данных, которая обеспечивает высокую производительность, безопасность и аналитические возможности для критически важных приложений.",
    features: [
      "Высокая производительность",
      "Встроенная безопасность",
      "Облачная интеграция",
      "Аналитика в реальном времени",
      "Машинное обучение",
      "Гибридные сценарии",
      "Поддержка JSON",
      "Автоматическое резервное копирование",
    ],
    systemRequirements: {
      windows: "Windows Server 2016 или новее",
      mac: "Не поддерживается",
      linux: "Ubuntu 16.04+, RHEL 7+",
      ram: "4 ГБ ОЗУ (рекомендуется 8 ГБ)",
      storage: "6 ГБ свободного места",
    },
    changelog: [
      {
        version: "2022",
        date: "2024-01-15",
        changes: ["Улучшения производительности", "Новые функции безопасности", "Поддержка Kubernetes"],
      },
    ],
  },
  // СУБД
  ssms: {
    name: "SQL Server Management Studio",
    description: "Интегрированная среда для управления SQL Server",
    image: "/images/ssms.png",
    category: "СУБД",
    developer: "Microsoft Corporation",
    website: "https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms",
    rating: 4.4,
    downloads: "10M+",
    lastUpdate: "2024-01-10",
    license: "Freeware",
    overview:
      "SQL Server Management Studio (SSMS) — это интегрированная среда для управления любой инфраструктурой SQL, от SQL Server до базы данных SQL Azure.",
    features: [
      "Управление базами данных",
      "Редактор запросов T-SQL",
      "Мастера настройки",
      "Планы выполнения запросов",
      "Резервное копирование и восстановление",
      "Мониторинг производительности",
      "Управление безопасностью",
      "Интеграция с Azure",
    ],
    systemRequirements: {
      windows: "Windows 10 или новее",
      mac: "Не поддерживается",
      linux: "Не поддерживается",
      ram: "2 ГБ ОЗУ (рекомендуется 4 ГБ)",
      storage: "2 ГБ свободного места",
    },
    changelog: [
      {
        version: "19.3",
        date: "2024-01-10",
        changes: ["Улучшения в редакторе запросов", "Новые функции Azure", "Исправления ошибок"],
      },
    ],
  },
  "sqlite-expert": {
    name: "SQLite Expert Professional",
    description: "Инструмент для администрирования SQLite",
    image: "/images/sqlite-expert.png",
    category: "СУБД",
    developer: "SQLite Expert",
    website: "http://www.sqliteexpert.com/",
    rating: 4.3,
    downloads: "500K+",
    lastUpdate: "2023-12-20",
    license: "Commercial",
    overview:
      "SQLite Expert Professional — это мощный инструмент для администрирования и разработки баз данных SQLite с визуальным интерфейсом.",
    features: [
      "Визуальный редактор схемы",
      "Редактор SQL с подсветкой",
      "Импорт/экспорт данных",
      "Анализ производительности",
      "Управление индексами",
      "Поддержка триггеров",
      "Резервное копирование",
      "Сравнение баз данных",
    ],
    systemRequirements: {
      windows: "Windows 7 или новее",
      mac: "Не поддерживается",
      linux: "Не поддерживается",
      ram: "1 ГБ ОЗУ",
      storage: "50 МБ свободного места",
    },
    changelog: [
      {
        version: "5.4.2",
        date: "2023-12-20",
        changes: ["Улучшения интерфейса", "Новые функции экспорта", "Исправления ошибок"],
      },
    ],
  },
  "ms-query": {
    name: "Microsoft Query",
    description: "Инструмент для создания запросов к данным",
    image: "/images/ms-query.png",
    category: "СУБД",
    developer: "Microsoft Corporation",
    website:
      "https://support.microsoft.com/en-us/office/introduction-to-microsoft-query-ca69e0f0-3435-42f4-9a27-6f3f3fd35878",
    rating: 3.8,
    downloads: "2M+",
    lastUpdate: "2023-11-15",
    license: "Commercial",
    overview:
      "Microsoft Query — это инструмент для создания запросов к внешним источникам данных и импорта результатов в Excel.",
    features: [
      "Подключение к различным источникам данных",
      "Визуальный конструктор запросов",
      "Интеграция с Excel",
      "Поддержка ODBC",
      "Фильтрация и сортировка",
      "Автоматическое обновление данных",
      "Экспорт результатов",
      "Мастер подключений",
    ],
    systemRequirements: {
      windows: "Windows 10 или новее",
      mac: "macOS 10.15 или новее",
      linux: "Не поддерживается",
      ram: "1 ГБ ОЗУ",
      storage: "100 МБ свободного места",
    },
    changelog: [
      {
        version: "16.0",
        date: "2023-11-15",
        changes: ["Улучшения совместимости", "Новые драйверы ODBC", "Исправления ошибок"],
      },
    ],
  },
  "ms-access": {
    name: "Microsoft Access",
    description: "Система управления базами данных",
    image: "/images/ms-access.png",
    category: "СУБД",
    developer: "Microsoft Corporation",
    website: "https://www.microsoft.com/en-us/microsoft-365/access",
    rating: 4.1,
    downloads: "15M+",
    lastUpdate: "2024-01-05",
    license: "Commercial",
    overview:
      "Microsoft Access — это система управления базами данных для создания настольных приложений с удобным интерфейсом.",
    features: [
      "Создание настольных приложений",
      "Конструктор форм и отчетов",
      "Мастера создания объектов",
      "Интеграция с Office",
      "Поддержка макросов",
      "Веб-приложения",
      "Шаблоны баз данных",
      "Связи между таблицами",
    ],
    systemRequirements: {
      windows: "Windows 10 или новее",
      mac: "Не поддерживается",
      linux: "Не поддерживается",
      ram: "2 ГБ ОЗУ (рекомендуется 4 ГБ)",
      storage: "3 ГБ свободного места",
    },
    changelog: [
      {
        version: "2024",
        date: "2024-01-05",
        changes: ["Улучшения производительности", "Новые шаблоны", "Обновления безопасности"],
      },
    ],
  },
  "openoffice-base": {
    name: "OpenOffice Base",
    description: "Бесплатная система управления БД",
    image: "/images/openoffice-base.png",
    category: "СУБД",
    developer: "Apache Software Foundation",
    website: "https://www.openoffice.org/product/base.html",
    rating: 3.9,
    downloads: "3M+",
    lastUpdate: "2023-10-20",
    license: "Apache License 2.0",
    overview:
      "OpenOffice Base — это бесплатная система управления базами данных из пакета OpenOffice с поддержкой различных форматов.",
    features: [
      "Поддержка различных СУБД",
      "Конструктор форм",
      "Генератор отчетов",
      "Мастера создания",
      "Интеграция с OpenOffice",
      "Поддержка SQL",
      "Импорт/экспорт данных",
      "Кроссплатформенность",
    ],
    systemRequirements: {
      windows: "Windows 7 или новее",
      mac: "macOS 10.12 или новее",
      linux: "Большинство дистрибутивов",
      ram: "512 МБ ОЗУ (рекомендуется 1 ГБ)",
      storage: "400 МБ свободного места",
    },
    changelog: [
      {
        version: "4.1.14",
        date: "2023-10-20",
        changes: ["Исправления безопасности", "Улучшения стабильности", "Обновления локализации"],
      },
    ],
  },
  // Программирование
  vscode: {
    name: "Visual Studio Code",
    description: "Современный редактор кода от Microsoft",
    image: "/images/vscode.png",
    category: "Программирование",
    developer: "Microsoft Corporation",
    website: "https://code.visualstudio.com/",
    rating: 4.8,
    downloads: "50M+",
    lastUpdate: "2024-01-15",
    license: "MIT License",
    overview:
      "Visual Studio Code — это легкий, но мощный редактор исходного кода, который работает на вашем рабочем столе и доступен для Windows, macOS и Linux. Он поставляется со встроенной поддержкой JavaScript, TypeScript и Node.js и имеет богатую экосистему расширений для других языков и сред выполнения.",
    features: [
      "Интеллектуальное автодополнение (IntelliSense)",
      "Встроенный терминал",
      "Отладчик с поддержкой точек останова",
      "Интеграция с Git и другими системами контроля версий",
      "Тысячи расширений в Marketplace",
      "Поддержка множества языков программирования",
      "Настраиваемые темы и горячие клавиши",
      "Встроенный эмулятор терминала",
    ],
    systemRequirements: {
      windows: "Windows 10 или новее",
      mac: "macOS 10.15 или новее",
      linux: "Ubuntu 18.04+, Debian 9+, RHEL 7+",
      ram: "1 ГБ ОЗУ (рекомендуется 2 ГБ)",
      storage: "200 МБ свободного места",
    },
    changelog: [
      {
        version: "1.85.2",
        date: "2024-01-15",
        changes: [
          "Исправлены критические ошибки безопасности",
          "Улучшена производительность автодополнения",
          "Добавлена поддержка новых языков",
        ],
      },
    ],
  },
  "notepad-plus": {
    name: "Notepad++",
    description: "Бесплатный редактор исходного кода",
    image: "/images/notepad-plus.png",
    category: "Программирование",
    developer: "Don Ho",
    website: "https://notepad-plus-plus.org/",
    rating: 4.7,
    downloads: "10M+",
    lastUpdate: "2024-01-12",
    license: "GPL v3",
    overview:
      "Notepad++ — это бесплатный редактор исходного кода и замена Блокнота, который поддерживает несколько языков программирования. Работает в среде MS Windows и распространяется под лицензией GPL.",
    features: [
      "Подсветка синтаксиса для 80+ языков",
      "Поддержка множества кодировок",
      "Система плагинов",
      "Поиск и замена с регулярными выражениями",
      "Автодополнение функций",
      "Запись и воспроизведение макросов",
      "Многооконный интерфейс",
      "Сравнение файлов",
    ],
    systemRequirements: {
      windows: "Windows 7 или новее",
      mac: "Не поддерживается",
      linux: "Не поддерживается",
      ram: "256 МБ ОЗУ",
      storage: "10 МБ свободного места",
    },
    changelog: [
      {
        version: "8.6.2",
        date: "2024-01-12",
        changes: ["Исправлены ошибки с Unicode", "Улучшена производительность", "Обновлены языковые файлы"],
      },
    ],
  },
  "bootstrap-studio": {
    name: "Bootstrap Studio",
    description: "Инструмент для создания веб-сайтов с Bootstrap",
    image: "/images/bootstrap-studio.png",
    category: "Программирование",
    developer: "Zine EOOD",
    website: "https://bootstrapstudio.io/",
    rating: 4.5,
    downloads: "1M+",
    lastUpdate: "2023-12-15",
    license: "Commercial",
    overview:
      "Bootstrap Studio — это мощный инструмент для создания адаптивных веб-сайтов с использованием Bootstrap framework с визуальным интерфейсом.",
    features: [
      "Визуальный редактор Bootstrap",
      "Готовые компоненты",
      "Адаптивный дизайн",
      "Экспорт чистого HTML/CSS",
      "Интеграция с Google Fonts",
      "Предварительный просмотр",
      "Библиотека шаблонов",
      "Настраиваемые компоненты",
    ],
    systemRequirements: {
      windows: "Windows 10 или новее",
      mac: "macOS 10.14 или новее",
      linux: "Ubuntu 18.04+",
      ram: "2 ГБ ОЗУ (рекомендуется 4 ГБ)",
      storage: "500 МБ свободного места",
    },
    changelog: [
      {
        version: "6.4.2",
        date: "2023-12-15",
        changes: ["Обновлен Bootstrap до версии 5.3", "Новые компоненты", "Исправления ошибок"],
      },
    ],
  },
  "visual-studio-2022": {
    name: "Visual Studio 2022",
    description: "Интегрированная среда разработки",
    image: "/images/visual-studio.png",
    category: "Программирование",
    developer: "Microsoft Corporation",
    website: "https://visualstudio.microsoft.com/vs/",
    rating: 4.6,
    downloads: "20M+",
    lastUpdate: "2024-01-08",
    license: "Commercial/Community",
    overview:
      "Visual Studio 2022 — это интегрированная среда разработки от Microsoft для создания приложений на различных платформах.",
    features: [
      "Поддержка множества языков",
      "IntelliSense и автодополнение",
      "Встроенный отладчик",
      "Интеграция с Azure",
      "Система контроля версий",
      "Профилировщик производительности",
      "Дизайнеры интерфейсов",
      "Расширения и плагины",
    ],
    systemRequirements: {
      windows: "Windows 10 версии 1909 или новее",
      mac: "macOS 10.15 или новее",
      linux: "Не поддерживается",
      ram: "4 ГБ ОЗУ (рекомендуется 16 ГБ)",
      storage: "2-60 ГБ в зависимости от компонентов",
    },
    changelog: [
      {
        version: "17.8.5",
        date: "2024-01-08",
        changes: ["Улучшения производительности", "Новые функции отладки", "Обновления безопасности"],
      },
    ],
  },
  webstorm: {
    name: "WebStorm",
    description: "IDE для веб-разработки от JetBrains",
    image: "/images/webstorm.png",
    category: "Программирование",
    developer: "JetBrains",
    website: "https://www.jetbrains.com/webstorm/",
    rating: 4.7,
    downloads: "5M+",
    lastUpdate: "2024-01-10",
    license: "Commercial",
    overview:
      "WebStorm — это интеллектуальная IDE для современной веб-разработки с поддержкой JavaScript, TypeScript и популярных фреймворков.",
    features: [
      "Умное автодополнение",
      "Мощный отладчик",
      "Интеграция с системами контроля версий",
      "Поддержка фреймворков",
      "Рефакторинг кода",
      "Встроенный терминал",
      "Тестирование",
      "Интеграция с инструментами сборки",
    ],
    systemRequirements: {
      windows: "Windows 10 или новее",
      mac: "macOS 10.14 или новее",
      linux: "Ubuntu 18.04+, RHEL 8+",
      ram: "2 ГБ ОЗУ (рекомендуется 8 ГБ)",
      storage: "3.5 ГБ свободного места",
    },
    changelog: [
      {
        version: "2023.3.2",
        date: "2024-01-10",
        changes: ["Улучшения TypeScript", "Новые функции отладки", "Обновления Vue.js"],
      },
    ],
  },
  "1c-enterprise": {
    name: "1C Предприятие",
    description: "Платформа для разработки бизнес-приложений",
    image: "/images/1c.png",
    category: "Программирование",
    developer: "1С",
    website: "https://v8.1c.ru/",
    rating: 4.2,
    downloads: "3M+",
    lastUpdate: "2023-12-20",
    license: "Commercial",
    overview:
      "1C:Предприятие — это универсальная система автоматизации деятельности предприятия и платформа для разработки прикладных решений.",
    features: [
      "Конфигурирование без программирования",
      "Встроенный язык программирования",
      "Система управления данными",
      "Генератор отчетов",
      "Веб-интерфейс",
      "Мобильные приложения",
      "Интеграция с внешними системами",
      "Система прав доступа",
    ],
    systemRequirements: {
      windows: "Windows 10 или новее",
      mac: "Не поддерживается",
      linux: "Ubuntu 18.04+, CentOS 7+",
      ram: "2 ГБ ОЗУ (рекомендуется 4 ГБ)",
      storage: "2 ГБ свободного места",
    },
    changelog: [
      {
        version: "8.3.24",
        date: "2023-12-20",
        changes: ["Новые возможности платформы", "Улучшения производительности", "Обновления безопасности"],
      },
    ],
  },
  "python-idle": {
    name: "IDLE (Python 3.6 32-bit)",
    description: "Среда разработки для Python",
    image: "/images/python-idle.png",
    category: "Программирование",
    developer: "Python Software Foundation",
    website: "https://www.python.org/downloads/",
    rating: 4.0,
    downloads: "25M+",
    lastUpdate: "2023-11-30",
    license: "Python Software Foundation License",
    overview:
      "IDLE — это интегрированная среда разработки и обучения для Python, входящая в стандартную поставку Python.",
    features: [
      "Интерактивная оболочка Python",
      "Редактор с подсветкой синтаксиса",
      "Отладчик",
      "Автодополнение",
      "Браузер объектов",
      "Поиск в файлах",
      "Настраиваемый интерфейс",
      "Кроссплатформенность",
    ],
    systemRequirements: {
      windows: "Windows 7 или новее",
      mac: "macOS 10.9 или новее",
      linux: "Большинство дистрибутивов",
      ram: "512 МБ ОЗУ",
      storage: "100 МБ свободного места",
    },
    changelog: [
      {
        version: "3.6.8",
        date: "2023-11-30",
        changes: ["Исправления безопасности", "Улучшения стабильности", "Обновления документации"],
      },
    ],
  },
  "intellij-idea": {
    name: "IntelliJ IDEA",
    description: "IDE для Java и других языков",
    image: "/images/intellij.png",
    category: "Программирование",
    developer: "JetBrains",
    website: "https://www.jetbrains.com/idea/",
    rating: 4.8,
    downloads: "12M+",
    lastUpdate: "2024-01-12",
    license: "Commercial/Community",
    overview:
      "IntelliJ IDEA — это интегрированная среда разработки для Java и других языков программирования с мощными возможностями анализа кода.",
    features: [
      "Умный анализ кода",
      "Мощные инструменты рефакторинга",
      "Встроенные инструменты разработчика",
      "Поддержка фреймворков",
      "Система контроля версий",
      "Отладчик и профайлер",
      "Тестирование",
      "Интеграция с базами данных",
    ],
    systemRequirements: {
      windows: "Windows 10 или новее",
      mac: "macOS 10.14 или новее",
      linux: "Ubuntu 18.04+, RHEL 8+",
      ram: "2 ГБ ОЗУ (рекомендуется 8 ГБ)",
      storage: "3.5 ГБ свободного места",
    },
    changelog: [
      {
        version: "2023.3.2",
        date: "2024-01-12",
        changes: ["Улучшения Java 21", "Новые функции Kotlin", "Обновления Spring Boot"],
      },
    ],
  },
  pycharm: {
    name: "PyCharm",
    description: "Профессиональная IDE для Python",
    image: "/images/pycharm.png",
    category: "Программирование",
    developer: "JetBrains",
    website: "https://www.jetbrains.com/pycharm/",
    rating: 4.7,
    downloads: "8M+",
    lastUpdate: "2024-01-11",
    license: "Commercial/Community",
    overview:
      "PyCharm — это интегрированная среда разработки для языка программирования Python с богатым набором инструментов для продуктивной разработки.",
    features: [
      "Умное автодополнение",
      "Анализ кода и рефакторинг",
      "Мощный отладчик",
      "Поддержка веб-фреймворков",
      "Научные инструменты",
      "Интеграция с базами данных",
      "Система контроля версий",
      "Удаленная разработка",
    ],
    systemRequirements: {
      windows: "Windows 10 или новее",
      mac: "macOS 10.14 или новее",
      linux: "Ubuntu 18.04+, RHEL 8+",
      ram: "2 ГБ ОЗУ (рекомендуется 8 ГБ)",
      storage: "3.5 ГБ свободного места",
    },
    changelog: [
      {
        version: "2023.3.2",
        date: "2024-01-11",
        changes: ["Улучшения Python 3.12", "Новые функции Django", "Обновления Jupyter"],
      },
    ],
  },
  // Проектирование
  "process-modeler": {
    name: "Process Modeler",
    description: "Инструмент для моделирования бизнес-процессов",
    image: "/images/process-modeler.png",
    category: "Проектирование",
    developer: "ITP Commerce",
    website: "https://www.itp-commerce.com/",
    rating: 4.1,
    downloads: "200K+",
    lastUpdate: "2023-11-25",
    license: "Commercial",
    overview:
      "Process Modeler — это профессиональный инструмент для моделирования, анализа и оптимизации бизнес-процессов предприятия.",
    features: [
      "Моделирование BPMN 2.0",
      "Анализ процессов",
      "Симуляция выполнения",
      "Генерация документации",
      "Интеграция с базами данных",
      "Экспорт в различные форматы",
      "Совместная работа",
      "Управление версиями",
    ],
    systemRequirements: {
      windows: "Windows 10 или новее",
      mac: "Не поддерживается",
      linux: "Не поддерживается",
      ram: "2 ГБ ОЗУ (рекомендуется 4 ГБ)",
      storage: "1 ГБ свободного места",
    },
    changelog: [
      {
        version: "7.5.2",
        date: "2023-11-25",
        changes: ["Новые элементы BPMN", "Улучшения интерфейса", "Исправления ошибок"],
      },
    ],
  },
  ramus: {
    name: "Ramus",
    description: "CASE-система для структурного анализа",
    image: "/images/ramus.png",
    category: "Проектирование",
    developer: "Ramus Software",
    website: "http://ramussoftware.com/",
    rating: 3.8,
    downloads: "150K+",
    lastUpdate: "2023-10-15",
    license: "GPL v2",
    overview:
      "Ramus — это свободная CASE-система для структурного анализа и проектирования информационных систем с поддержкой различных методологий.",
    features: [
      "Структурный анализ",
      "DFD диаграммы",
      "IDEF0 моделирование",
      "Генерация кода",
      "Экспорт диаграмм",
      "Многопользовательская работа",
      "Система версий",
      "Настраиваемые шаблоны",
    ],
    systemRequirements: {
      windows: "Windows 7 или новее",
      mac: "macOS 10.12 или новее",
      linux: "Ubuntu 16.04+",
      ram: "1 ГБ ОЗУ (рекомендуется 2 ГБ)",
      storage: "200 МБ свободного места",
    },
    changelog: [
      {
        version: "1.3.0",
        date: "2023-10-15",
        changes: ["Новые типы диаграмм", "Улучшения производительности", "Исправления ошибок"],
      },
    ],
  },
  "draw-io": {
    name: "Draw.io",
    description: "Бесплатный редактор диаграмм",
    image: "/images/draw-io.png",
    category: "Проектирование",
    developer: "JGraph Ltd",
    website: "https://app.diagrams.net/",
    rating: 4.6,
    downloads: "10M+",
    lastUpdate: "2024-01-05",
    license: "Apache License 2.0",
    overview:
      "Draw.io (теперь diagrams.net) — это бесплатный онлайн-редактор диаграмм для создания блок-схем, UML диаграмм, схем сетей и многого другого.",
    features: [
      "Широкий выбор шаблонов",
      "Совместная работа в реальном времени",
      "Интеграция с облачными сервисами",
      "Экспорт в различные форматы",
      "Настраиваемые библиотеки фигур",
      "Автоматическое сохранение",
      "Поддержка слоев",
      "Версионность",
    ],
    systemRequirements: {
      windows: "Любой браузер",
      mac: "Любой браузер",
      linux: "Любой браузер",
      ram: "512 МБ ОЗУ",
      storage: "Не требуется (веб-приложение)",
    },
    changelog: [
      {
        version: "22.1.11",
        date: "2024-01-05",
        changes: ["Новые шаблоны", "Улучшения производительности", "Исправления ошибок"],
      },
    ],
  },
  mydraw: {
    name: "MyDraw",
    description: "Инструмент для создания диаграмм",
    image: "/images/mydraw.png",
    category: "Проектирование",
    developer: "Nevron Software",
    website: "https://www.nevron.com/products-open-vision-mydraw-overview.aspx",
    rating: 4.2,
    downloads: "500K+",
    lastUpdate: "2023-12-10",
    license: "Commercial",
    overview:
      "MyDraw — это профессиональный инструмент для создания диаграмм и векторной графики с богатым набором функций и шаблонов.",
    features: [
      "Векторная графика",
      "Богатая библиотека шаблонов",
      "Автоматическое размещение",
      "Экспорт в различные форматы",
      "Поддержка Visio файлов",
      "Настраиваемые стили",
      "Печать больших диаграмм",
      "Интеграция с Office",
    ],
    systemRequirements: {
      windows: "Windows 10 или новее",
      mac: "macOS 10.14 или новее",
      linux: "Не поддерживается",
      ram: "1 ГБ ОЗУ (рекомендуется 2 ГБ)",
      storage: "500 МБ свободного места",
    },
    changelog: [
      {
        version: "5.3.2",
        date: "2023-12-10",
        changes: ["Новые шаблоны диаграмм", "Улучшения экспорта", "Исправления ошибок"],
      },
    ],
  },
  edrawmax: {
    name: "EdrawMax",
    description: "Универсальное решение для диаграмм",
    image: "/images/edrawmax.png",
    category: "Проектирование",
    developer: "Wondershare",
    website: "https://www.edrawsoft.com/edraw-max/",
    rating: 4.4,
    downloads: "2M+",
    lastUpdate: "2024-01-03",
    license: "Commercial",
    overview:
      "EdrawMax — это универсальное решение для создания диаграмм любого типа с более чем 280 типами диаграмм и тысячами шаблонов.",
    features: [
      "280+ типов диаграмм",
      "Тысячи шаблонов",
      "Совместная работа",
      "Облачное хранение",
      "Экспорт в Office",
      "Презентационный режим",
      "Интеграция с командой",
      "Мобильное приложение",
    ],
    systemRequirements: {
      windows: "Windows 7 или новее",
      mac: "macOS 10.12 или новее",
      linux: "Ubuntu 18.04+",
      ram: "2 ГБ ОЗУ (рекомендуется 4 ГБ)",
      storage: "2 ГБ свободного места",
    },
    changelog: [
      {
        version: "12.5.3",
        date: "2024-01-03",
        changes: ["Новые шаблоны", "Улучшения совместной работы", "Обновления безопасности"],
      },
    ],
  },
  balsamiq: {
    name: "Balsamiq Wireframes",
    description: "Инструмент для создания макетов",
    image: "/images/balsamiq.png",
    category: "Проектирование",
    developer: "Balsamiq Studios",
    website: "https://balsamiq.com/wireframes/",
    rating: 4.5,
    downloads: "1M+",
    lastUpdate: "2023-12-20",
    license: "Commercial",
    overview:
      "Balsamiq Wireframes — это инструмент для быстрого создания макетов пользовательских интерфейсов с фокусом на простоту и скорость.",
    features: [
      "Быстрое создание макетов",
      "Библиотека UI элементов",
      "Совместная работа",
      "Интерактивные прототипы",
      "Экспорт в различные форматы",
      "Интеграция с другими инструментами",
      "Версионность проектов",
      "Комментарии и обратная связь",
    ],
    systemRequirements: {
      windows: "Windows 10 или новее",
      mac: "macOS 10.14 или новее",
      linux: "Ubuntu 18.04+",
      ram: "1 ГБ ОЗУ (рекомендуется 2 ГБ)",
      storage: "500 МБ свободного места",
    },
    changelog: [
      {
        version: "4.7.4",
        date: "2023-12-20",
        changes: ["Новые UI компоненты", "Улучшения производительности", "Исправления ошибок"],
      },
    ],
  },
  "adobe-xd": {
    name: "Adobe Experience Design (Adobe XD)",
    description: "Инструмент для UX/UI дизайна",
    image: "/images/adobe-xd.png",
    category: "Проектирование",
    developer: "Adobe Inc.",
    website: "https://www.adobe.com/products/xd.html",
    rating: 4.3,
    downloads: "5M+",
    lastUpdate: "2023-11-30",
    license: "Freemium",
    overview:
      "Adobe XD — это инструмент для дизайна и прототипирования пользовательского опыта для веб-сайтов и мобильных приложений.",
    features: [
      "Дизайн интерфейсов",
      "Интерактивные прототипы",
      "Совместная работа в реальном времени",
      "Система дизайна",
      "Анимации и переходы",
      "Тестирование пользователей",
      "Интеграция с Creative Cloud",
      "Плагины и расширения",
    ],
    systemRequirements: {
      windows: "Windows 10 версии 1903 или новее",
      mac: "macOS 10.14 или новее",
      linux: "Не поддерживается",
      ram: "4 ГБ ОЗУ (рекомендуется 8 ГБ)",
      storage: "4 ГБ свободного места",
    },
    changelog: [
      {
        version: "57.1.12",
        date: "2023-11-30",
        changes: ["Улучшения прототипирования", "Новые функции совместной работы", "Исправления ошибок"],
      },
    ],
  },
  "ms-visio": {
    name: "Microsoft Visio",
    description: "Профессиональный инструмент для диаграмм",
    image: "/images/ms-visio.png",
    category: "Проектирование",
    developer: "Microsoft Corporation",
    website: "https://www.microsoft.com/en-us/microsoft-365/visio/flowchart-software",
    rating: 4.2,
    downloads: "8M+",
    lastUpdate: "2024-01-02",
    license: "Commercial",
    overview:
      "Microsoft Visio — это профессиональный инструмент для создания диаграмм, блок-схем, планов этажей и других визуальных представлений.",
    features: [
      "Профессиональные шаблоны",
      "Связь с данными",
      "Совместная работа",
      "Интеграция с Office 365",
      "Автоматическое обновление диаграмм",
      "Веб-версия",
      "Настраиваемые фигуры",
      "Экспорт в различные форматы",
    ],
    systemRequirements: {
      windows: "Windows 10 или новее",
      mac: "Веб-версия через браузер",
      linux: "Веб-версия через браузер",
      ram: "2 ГБ ОЗУ (рекомендуется 4 ГБ)",
      storage: "3 ГБ свободного места",
    },
    changelog: [
      {
        version: "2024",
        date: "2024-01-02",
        changes: ["Новые шаблоны", "Улучшения совместной работы", "Обновления безопасности"],
      },
    ],
  },
  // Дизайн
  figma: {
    name: "Figma",
    description: "Современный инструмент для UI/UX дизайна",
    image: "/images/figma.png",
    category: "Дизайн",
    developer: "Figma Inc.",
    website: "https://www.figma.com/",
    rating: 4.7,
    downloads: "10M+",
    lastUpdate: "2024-01-10",
    license: "Freemium",
    overview:
      "Figma — это веб-приложение для совместного интерфейсного дизайна с дополнительными офлайн-функциями, включенными в настольные приложения для macOS и Windows. Функции Figma сосредоточены на использовании в пользовательском интерфейсе и дизайне пользовательского опыта.",
    features: [
      "Совместная работа в реальном времени",
      "Векторные инструменты для дизайна",
      "Прототипирование и анимации",
      "Компонентная система дизайна",
      "Автолейауты и адаптивный дизайн",
      "Плагины и интеграции",
      "Комментарии и обратная связь",
      "Экспорт в различные форматы",
    ],
    systemRequirements: {
      windows: "Windows 10 или новее",
      mac: "macOS 10.13 или новее",
      linux: "Не поддерживается (используйте веб-версию)",
      ram: "4 ГБ ОЗУ (рекомендуется 8 ГБ)",
      storage: "500 МБ свободного места",
    },
    changelog: [
      {
        version: "Desktop 116.16.8",
        date: "2024-01-10",
        changes: [
          "Улучшена производительность больших файлов",
          "Добавлены новые инструменты прототипирования",
          "Исправлены ошибки синхронизации",
        ],
      },
    ],
  },
  axure: {
    name: "Axure RP",
    description: "Инструмент для создания прототипов",
    image: "/images/axure.png",
    category: "Дизайн",
    developer: "Axure Software Solutions",
    website: "https://www.axure.com/",
    rating: 4.1,
    downloads: "1M+",
    lastUpdate: "2023-12-15",
    license: "Commercial",
    overview:
      "Axure RP — это инструмент для создания интерактивных прототипов и спецификаций для веб-сайтов и приложений без программирования.",
    features: [
      "Интерактивные прототипы",
      "Условная логика",
      "Динамический контент",
      "Адаптивный дизайн",
      "Совместная работа",
      "Генерация спецификаций",
      "Библиотеки виджетов",
      "Интеграция с другими инструментами",
    ],
    systemRequirements: {
      windows: "Windows 10 или новее",
      mac: "macOS 10.14 или новее",
      linux: "Не поддерживается",
      ram: "2 ГБ ОЗУ (рекомендуется 4 ГБ)",
      storage: "2 ГБ свободного места",
    },
    changelog: [
      {
        version: "10.0.0.3889",
        date: "2023-12-15",
        changes: ["Новые виджеты", "Улучшения производительности", "Исправления ошибок"],
      },
    ],
  },
  "adobe-photoshop": {
    name: "Adobe Photoshop",
    description: "Профессиональный редактор изображений",
    image: "/images/photoshop.png",
    category: "Дизайн",
    developer: "Adobe Inc.",
    website: "https://www.adobe.com/products/photoshop.html",
    rating: 4.6,
    downloads: "20M+",
    lastUpdate: "2024-01-08",
    license: "Subscription",
    overview:
      "Adobe Photoshop — это профессиональный редактор растровых изображений, стандарт индустрии для обработки фотографий и создания цифрового искусства.",
    features: [
      "Профессиональная обработка изображений",
      "Слои и маски",
      "Инструменты ретуши",
      "Фильтры и эффекты",
      "3D дизайн",
      "Автоматизация действий",
      "Интеграция с Creative Cloud",
      "Поддержка различных форматов",
    ],
    systemRequirements: {
      windows: "Windows 10 версии 1909 или новее",
      mac: "macOS 10.15 или новее",
      linux: "Не поддерживается",
      ram: "8 ГБ ОЗУ (рекомендуется 16 ГБ)",
      storage: "4 ГБ свободного места",
    },
    changelog: [
      {
        version: "2024 (25.3.1)",
        date: "2024-01-08",
        changes: ["Новые AI функции", "Улучшения производительности", "Обновления интерфейса"],
      },
    ],
  },
  "adobe-muse": {
    name: "Adobe Muse",
    description: "Инструмент для создания веб-сайтов",
    image: "/images/adobe-muse.png",
    category: "Дизайн",
    developer: "Adobe Inc.",
    website: "https://www.adobe.com/products/muse.html",
    rating: 3.5,
    downloads: "2M+",
    lastUpdate: "2020-03-26",
    license: "Discontinued",
    overview:
      "Adobe Muse был инструментом для создания веб-сайтов без программирования. Программа была прекращена в 2020 году, но файлы все еще можно открывать.",
    features: [
      "Визуальный дизайн веб-сайтов",
      "Адаптивный дизайн",
      "Виджеты и эффекты",
      "Интеграция с Creative Cloud",
      "Публикация на хостинге",
      "SEO инструменты",
      "Формы и интерактивность",
      "Экспорт HTML/CSS",
    ],
    systemRequirements: {
      windows: "Windows 10 или новее",
      mac: "macOS 10.13 или новее",
      linux: "Не поддерживается",
      ram: "4 ГБ ОЗУ",
      storage: "2 ГБ свободного места",
    },
    changelog: [
      {
        version: "2020.1.1",
        date: "2020-03-26",
        changes: ["Финальное обновление", "Исправления совместимости", "Подготовка к закрытию"],
      },
    ],
  },
  colormania: {
    name: "ColorMania",
    description: "Инструмент для работы с цветами",
    image: "/images/colormania.png",
    category: "Дизайн",
    developer: "Blacksun Software",
    website: "http://www.blacksunsoftware.com/colormania.html",
    rating: 4.0,
    downloads: "300K+",
    lastUpdate: "2023-08-15",
    license: "Freeware",
    overview:
      "ColorMania — это бесплатный инструмент для работы с цветами, позволяющий выбирать, анализировать и создавать цветовые палитры.",
    features: [
      "Пипетка для выбора цветов",
      "Цветовые палитры",
      "Конвертация между форматами",
      "Анализ цветовых схем",
      "Сохранение палитр",
      "Экспорт в различные форматы",
      "Цветовое колесо",
      "Генератор градиентов",
    ],
    systemRequirements: {
      windows: "Windows 7 или новее",
      mac: "Не поддерживается",
      linux: "Не поддерживается",
      ram: "256 МБ ОЗУ",
      storage: "10 МБ свободного места",
    },
    changelog: [
      {
        version: "5.4",
        date: "2023-08-15",
        changes: ["Новые цветовые форматы", "Улучшения интерфейса", "Исправления ошибок"],
      },
    ],
  },
  // Фреймворки JavaScript
  react: {
    name: "React",
    description: "JavaScript библиотека для UI",
    image: "/images/react.png",
    category: "Фреймворки JavaScript",
    developer: "Meta (Facebook)",
    website: "https://reactjs.org/",
    rating: 4.9,
    downloads: "20M+ weekly",
    lastUpdate: "2023-12-15",
    license: "MIT License",
    overview:
      "React — это JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. React разработан Facebook и позволяет создавать большие веб-приложения, которые могут изменять данные без перезагрузки страницы.",
    features: [
      "Компонентная архитектура",
      "Виртуальный DOM для высокой производительности",
      "JSX синтаксис",
      "React Hooks для управления состоянием",
      "Большая экосистема библиотек",
      "Активное сообщество разработчиков",
      "Server-Side Rendering",
      "React DevTools для отладки",
    ],
    systemRequirements: {
      windows: "Любая ОС с Node.js",
      mac: "Любая ОС с Node.js",
      linux: "Любая ОС с Node.js",
      ram: "512 МБ ОЗУ",
      storage: "Зависит от проекта",
    },
    changelog: [
      {
        version: "18.2.0",
        date: "2023-12-15",
        changes: [
          "Улучшения в React Server Components",
          "Оптимизация производительности",
          "Исправления багов в Concurrent Features",
        ],
      },
    ],
  },
  vuejs: {
    name: "Vue.js",
    description: "Прогрессивный JavaScript фреймворк",
    image: "/images/vuejs.png",
    category: "Фреймворки JavaScript",
    developer: "Evan You",
    website: "https://vuejs.org/",
    rating: 4.7,
    downloads: "4M+ weekly",
    lastUpdate: "2024-01-01",
    license: "MIT License",
    overview:
      "Vue.js — это прогрессивный JavaScript фреймворк для создания пользовательских интерфейсов, который легко интегрируется в существующие проекты.",
    features: [
      "Реактивная система данных",
      "Компонентная архитектура",
      "Директивы шаблонов",
      "Виртуальный DOM",
      "Простота изучения",
      "Гибкость и масштабируемость",
      "Vue CLI для быстрого старта",
      "Богатая экосистема",
    ],
    systemRequirements: {
      windows: "Любая ОС с Node.js",
      mac: "Любая ОС с Node.js",
      linux: "Любая ОС с Node.js",
      ram: "512 МБ ОЗУ",
      storage: "Зависит от проекта",
    },
    changelog: [
      {
        version: "3.4.0",
        date: "2024-01-01",
        changes: ["Улучшения производительности", "Новые композиционные функции", "Исправления ошибок"],
      },
    ],
  },
  angular: {
    name: "Angular",
    description: "Платформа для веб-приложений",
    image: "/images/angular.png",
    category: "Фреймворки JavaScript",
    developer: "Google",
    website: "https://angular.io/",
    rating: 4.5,
    downloads: "3M+ weekly",
    lastUpdate: "2023-12-20",
    license: "MIT License",
    overview:
      "Angular — это платформа для создания мобильных и десктопных веб-приложений с использованием TypeScript и мощными инструментами разработки.",
    features: [
      "TypeScript из коробки",
      "Мощная CLI",
      "Двустороннее связывание данных",
      "Dependency Injection",
      "Модульная архитектура",
      "Роутинг",
      "Формы и валидация",
      "Тестирование",
    ],
    systemRequirements: {
      windows: "Любая ОС с Node.js",
      mac: "Любая ОС с Node.js",
      linux: "Любая ОС с Node.js",
      ram: "1 ГБ ОЗУ (рекомендуется 2 ГБ)",
      storage: "Зависит от проекта",
    },
    changelog: [
      {
        version: "17.0.8",
        date: "2023-12-20",
        changes: ["Улучшения производительности", "Новые функции CLI", "Обновления безопасности"],
      },
    ],
  },
  nextjs: {
    name: "Next.js",
    description: "React фреймворк для production",
    image: "/images/nextjs.png",
    category: "Фреймворки JavaScript",
    developer: "Vercel",
    website: "https://nextjs.org/",
    rating: 4.8,
    downloads: "5M+ weekly",
    lastUpdate: "2024-01-05",
    license: "MIT License",
    overview:
      "Next.js — это React фреймворк для production-ready приложений с встроенной поддержкой SSR, SSG, API routes и многого другого.",
    features: [
      "Server-Side Rendering (SSR)",
      "Static Site Generation (SSG)",
      "API Routes",
      "Автоматическая оптимизация",
      "Встроенная поддержка CSS",
      "Image Optimization",
      "Incremental Static Regeneration",
      "TypeScript поддержка",
    ],
    systemRequirements: {
      windows: "Любая ОС с Node.js 16.8+",
      mac: "Любая ОС с Node.js 16.8+",
      linux: "Любая ОС с Node.js 16.8+",
      ram: "1 ГБ ОЗУ (рекомендуется 2 ГБ)",
      storage: "Зависит от проекта",
    },
    changelog: [
      {
        version: "14.0.4",
        date: "2024-01-05",
        changes: ["App Router улучшения", "Новые функции Server Components", "Исправления ошибок"],
      },
    ],
  },
  preact: {
    name: "Preact",
    description: "Быстрая альтернатива React",
    image: "/images/preact.png",
    category: "Фреймворки JavaScript",
    developer: "Jason Miller",
    website: "https://preactjs.com/",
    rating: 4.6,
    downloads: "1M+ weekly",
    lastUpdate: "2023-11-28",
    license: "MIT License",
    overview:
      "Preact — это быстрая 3kB альтернатива React с тем же современным API, идеально подходящая для создания легких приложений.",
    features: [
      "Размер всего 3kB",
      "Совместимость с React",
      "Быстрая производительность",
      "Современный API",
      "Hooks поддержка",
      "TypeScript поддержка",
      "Легкая миграция с React",
      "Отличная производительность",
    ],
    systemRequirements: {
      windows: "Любая ОС с Node.js",
      mac: "Любая ОС с Node.js",
      linux: "Любая ОС с Node.js",
      ram: "256 МБ ОЗУ",
      storage: "Зависит от проекта",
    },
    changelog: [
      {
        version: "10.19.2",
        date: "2023-11-28",
        changes: ["Улучшения производительности", "Новые хуки", "Исправления ошибок"],
      },
    ],
  },
  slidebean: {
    name: "Slidebean",
    description: "Платформа для создания презентаций",
    image: "/images/slidebean.png",
    category: "Фреймворки JavaScript",
    developer: "Slidebean",
    website: "https://slidebean.com/",
    rating: 4.2,
    downloads: "500K+",
    lastUpdate: "2023-12-10",
    license: "Freemium",
    overview:
      "Slidebean — это платформа для создания профессиональных презентаций с использованием искусственного интеллекта для автоматического дизайна.",
    features: [
      "AI-powered дизайн",
      "Профессиональные шаблоны",
      "Автоматическое форматирование",
      "Совместная работа",
      "Аналитика презентаций",
      "Экспорт в различные форматы",
      "Интеграция с другими сервисами",
      "Мобильное приложение",
    ],
    systemRequirements: {
      windows: "Любой современный браузер",
      mac: "Любой современный браузер",
      linux: "Любой современный браузер",
      ram: "1 ГБ ОЗУ",
      storage: "Не требуется (веб-приложение)",
    },
    changelog: [
      {
        version: "3.2.1",
        date: "2023-12-10",
        changes: ["Новые AI функции", "Улучшения интерфейса", "Новые шаблоны"],
      },
    ],
  },
  // Презентации
  "ms-powerpoint": {
    name: "Microsoft PowerPoint",
    description: "Программа для создания презентаций",
    image: "/images/ms-powerpoint.png",
    category: "Презентации",
    developer: "Microsoft Corporation",
    website: "https://www.microsoft.com/en-us/microsoft-365/powerpoint",
    rating: 4.4,
    downloads: "1B+",
    lastUpdate: "2024-01-05",
    license: "Commercial",
    overview:
      "Microsoft PowerPoint — это программа для создания и проведения презентаций, входящая в пакет Microsoft Office.",
    features: [
      "Богатые возможности форматирования",
      "Анимации и переходы",
      "Шаблоны и темы",
      "Совместная работа",
      "Интеграция с Office 365",
      "Презентационный режим",
      "Экспорт в различные форматы",
      "Облачная синхронизация",
    ],
    systemRequirements: {
      windows: "Windows 10 или новее",
      mac: "macOS 10.15 или новее",
      linux: "Веб-версия через браузер",
      ram: "2 ГБ ОЗУ (рекомендуется 4 ГБ)",
      storage: "3 ГБ свободного места",
    },
    changelog: [
      {
        version: "2024",
        date: "2024-01-05",
        changes: ["Новые анимации", "Улучшения совместной работы", "AI функции"],
      },
    ],
  },
  "apple-keynote": {
    name: "Apple Keynote",
    description: "Приложение для презентаций от Apple",
    image: "/images/keynote.png",
    category: "Презентации",
    developer: "Apple Inc.",
    website: "https://www.apple.com/keynote/",
    rating: 4.6,
    downloads: "10M+",
    lastUpdate: "2023-12-12",
    license: "Freeware (для пользователей Apple)",
    overview:
      "Apple Keynote — это приложение для создания презентаций от Apple с красивыми шаблонами и мощными инструментами анимации.",
    features: [
      "Красивые шаблоны",
      "Кинематографические переходы",
      "Интерактивные диаграммы",
      "Совместная работа в реальном времени",
      "Поддержка Apple Pencil",
      "Экспорт в различные форматы",
      "Интеграция с iCloud",
      "Презентация с нескольких устройств",
    ],
    systemRequirements: {
      windows: "Веб-версия через iCloud",
      mac: "macOS 10.15 или новее",
      linux: "Не поддерживается",
      ram: "2 ГБ ОЗУ",
      storage: "1 ГБ свободного места",
    },
    changelog: [
      {
        version: "13.2",
        date: "2023-12-12",
        changes: ["Новые шаблоны", "Улучшения производительности", "Исправления ошибок"],
      },
    ],
  },
  "libreoffice-impress": {
    name: "LibreOffice Impress",
    description: "Бесплатная программа для презентаций",
    image: "/images/libreoffice-impress.png",
    category: "Презентации",
    developer: "The Document Foundation",
    website: "https://www.libreoffice.org/discover/impress/",
    rating: 4.1,
    downloads: "5M+",
    lastUpdate: "2023-11-30",
    license: "Mozilla Public License v2.0",
    overview:
      "LibreOffice Impress — это бесплатная программа для создания презентаций с открытым исходным кодом, альтернатива PowerPoint.",
    features: [
      "Полная совместимость с PowerPoint",
      "Богатые возможности форматирования",
      "Анимации и эффекты",
      "Экспорт в PDF",
      "Поддержка множества форматов",
      "Кроссплатформенность",
      "Расширения",
      "Мастер презентаций",
    ],
    systemRequirements: {
      windows: "Windows 7 или новее",
      mac: "macOS 10.12 или новее",
      linux: "Большинство дистрибутивов",
      ram: "512 МБ ОЗУ (рекомендуется 1 ГБ)",
      storage: "1.5 ГБ свободного места",
    },
    changelog: [
      {
        version: "7.6.3",
        date: "2023-11-30",
        changes: ["Исправления безопасности", "Улучшения стабильности", "Новые функции"],
      },
    ],
  },
  "wps-presentation": {
    name: "WPS Presentation",
    description: "Альтернатива PowerPoint от WPS",
    image: "/images/wps-presentation.png",
    category: "Презентации",
    developer: "Kingsoft",
    website: "https://www.wps.com/presentation/",
    rating: 4.3,
    downloads: "3M+",
    lastUpdate: "2023-12-05",
    license: "Freemium",
    overview:
      "WPS Presentation — это бесплатная альтернатива PowerPoint с полной совместимостью и современным интерфейсом.",
    features: [
      "100% совместимость с PowerPoint",
      "Современный интерфейс",
      "Облачная синхронизация",
      "Богатые шаблоны",
      "Совместная работа",
      "Экспорт в PDF",
      "Мобильные приложения",
      "Бесплатное использование",
    ],
    systemRequirements: {
      windows: "Windows 7 или новее",
      mac: "macOS 10.12 или новее",
      linux: "Ubuntu 18.04+",
      ram: "1 ГБ ОЗУ (рекомендуется 2 ГБ)",
      storage: "1 ГБ свободного места",
    },
    changelog: [
      {
        version: "12.1.0",
        date: "2023-12-05",
        changes: ["Новые шаблоны", "Улучшения производительности", "Исправления ошибок"],
      },
    ],
  },
  "softmaker-presentations": {
    name: "SoftMaker Presentations",
    description: "Профессиональная программа для презентаций",
    image: "/images/softmaker.png",
    category: "Презентации",
    developer: "SoftMaker Software GmbH",
    website: "https://www.softmaker.com/en/softmaker-office-presentations",
    rating: 4.0,
    downloads: "500K+",
    lastUpdate: "2023-10-20",
    license: "Commercial",
    overview:
      "SoftMaker Presentations — это профессиональная программа для создания презентаций с высокой совместимостью с PowerPoint.",
    features: [
      "Высокая совместимость с PowerPoint",
      "Профессиональные шаблоны",
      "Анимации и переходы",
      "Экспорт в различные форматы",
      "Поддержка макросов",
      "Быстрая работа",
      "Настраиваемый интерфейс",
      "Поддержка сенсорных экранов",
    ],
    systemRequirements: {
      windows: "Windows 10 или новее",
      mac: "macOS 10.14 или новее",
      linux: "Ubuntu 18.04+",
      ram: "1 ГБ ОЗУ (рекомендуется 2 ГБ)",
      storage: "500 МБ свободного места",
    },
    changelog: [
      {
        version: "2024",
        date: "2023-10-20",
        changes: ["Новые функции анимации", "Улучшения интерфейса", "Исправления ошибок"],
      },
    ],
  },
  visme: {
    name: "Visme",
    description: "Инструмент для презентаций и инфографики",
    image: "/images/visme.png",
    category: "Презентации",
    developer: "Visme",
    website: "https://www.visme.co/",
    rating: 4.5,
    downloads: "2M+",
    lastUpdate: "2024-01-03",
    license: "Freemium",
    overview:
      "Visme — это онлайн-инструмент для создания презентаций, инфографики и других визуальных материалов с профессиональными шаблонами.",
    features: [
      "Презентации и инфографика",
      "Интерактивные элементы",
      "Анимации",
      "Библиотека ресурсов",
      "Совместная работа",
      "Аналитика просмотров",
      "Брендинг",
      "Экспорт в различные форматы",
    ],
    systemRequirements: {
      windows: "Любой современный браузер",
      mac: "Любой современный браузер",
      linux: "Любой современный браузер",
      ram: "1 ГБ ОЗУ",
      storage: "Не требуется (веб-приложение)",
    },
    changelog: [
      {
        version: "4.8.2",
        date: "2024-01-03",
        changes: ["Новые шаблоны", "Улучшения редактора", "Новые анимации"],
      },
    ],
  },
  // Тестирование
  postman: {
    name: "Postman",
    description: "Платформа для тестирования API",
    image: "/images/postman.png",
    category: "Тестирование",
    developer: "Postman Inc.",
    website: "https://www.postman.com/",
    rating: 4.6,
    downloads: "5M+",
    lastUpdate: "2024-01-08",
    license: "Freemium",
    overview:
      "Postman — это платформа API для создания и использования API. Postman упрощает каждый этап жизненного цикла API и оптимизирует совместную работу, чтобы вы могли создавать лучшие API быстрее.",
    features: [
      "Тестирование REST и GraphQL API",
      "Автоматизация тестов",
      "Мониторинг API",
      "Документация API",
      "Совместная работа команды",
      "Коллекции запросов",
      "Переменные окружения",
      "Интеграция с CI/CD",
    ],
    systemRequirements: {
      windows: "Windows 10 или новее",
      mac: "macOS 10.12 или новее",
      linux: "Ubuntu 14.04+",
      ram: "2 ГБ ОЗУ (рекомендуется 4 ГБ)",
      storage: "200 МБ свободного места",
    },
    changelog: [
      {
        version: "10.20.7",
        date: "2024-01-08",
        changes: [
          "Улучшена производительность коллекций",
          "Добавлена поддержка новых типов авторизации",
          "Исправлены ошибки импорта",
        ],
      },
    ],
  },
  jira: {
    name: "Jira",
    description: "Система управления проектами",
    image: "/images/jira.png",
    category: "Тестирование",
    developer: "Atlassian",
    website: "https://www.atlassian.com/software/jira",
    rating: 4.2,
    downloads: "10M+",
    lastUpdate: "2024-01-02",
    license: "Commercial",
    overview:
      "Jira — это система отслеживания задач и управления проектами, широко используемая командами разработки для планирования, отслеживания и управления работой.",
    features: [
      "Отслеживание задач и багов",
      "Agile/Scrum доски",
      "Настраиваемые рабочие процессы",
      "Отчеты и аналитика",
      "Интеграция с другими инструментами",
      "Управление релизами",
      "Автоматизация",
      "Мобильные приложения",
    ],
    systemRequirements: {
      windows: "Любой современный браузер",
      mac: "Любой современный браузер",
      linux: "Любой современный браузер",
      ram: "2 ГБ ОЗУ (рекомендуется 4 ГБ)",
      storage: "Не требуется (облачное решение)",
    },
    changelog: [
      {
        version: "9.12.0",
        date: "2024-01-02",
        changes: ["Новые функции автоматизации", "Улучшения производительности", "Обновления безопасности"],
      },
    ],
  },
  // Офис
  "ms-project": {
    name: "Microsoft Project",
    description: "Система управления проектами",
    image: "/images/ms-project.png",
    category: "Офис",
    developer: "Microsoft Corporation",
    website: "https://www.microsoft.com/en-us/microsoft-365/project/project-management-software",
    rating: 4.1,
    downloads: "5M+",
    lastUpdate: "2024-01-04",
    license: "Commercial",
    overview:
      "Microsoft Project — это система управления проектами от Microsoft для планирования, отслеживания и управления проектами любой сложности.",
    features: [
      "Планирование проектов",
      "Диаграммы Ганта",
      "Управление ресурсами",
      "Отслеживание прогресса",
      "Отчеты и аналитика",
      "Интеграция с Office 365",
      "Совместная работа",
      "Шаблоны проектов",
    ],
    systemRequirements: {
      windows: "Windows 10 или новее",
      mac: "Веб-версия через браузер",
      linux: "Веб-версия через браузер",
      ram: "2 ГБ ОЗУ (рекомендуется 4 ГБ)",
      storage: "3 ГБ свободного места",
    },
    changelog: [
      {
        version: "2024",
        date: "2024-01-04",
        changes: ["Новые функции планирования", "Улучшения интерфейса", "Интеграция с Teams"],
      },
    ],
  },
  "ms-excel": {
    name: "Microsoft Excel",
    description: "Программа для работы с таблицами",
    image: "/images/ms-excel.png",
    category: "Офис",
    developer: "Microsoft Corporation",
    website: "https://www.microsoft.com/en-us/microsoft-365/excel",
    rating: 4.5,
    downloads: "1B+",
    lastUpdate: "2024-01-06",
    license: "Commercial",
    overview:
      "Microsoft Excel — это программа для работы с электронными таблицами, анализа данных и создания отчетов, входящая в пакет Microsoft Office.",
    features: [
      "Электронные таблицы",
      "Формулы и функции",
      "Диаграммы и графики",
      "Сводные таблицы",
      "Макросы и VBA",
      "Совместная работа",
      "Анализ данных",
      "Интеграция с Power BI",
    ],
    systemRequirements: {
      windows: "Windows 10 или новее",
      mac: "macOS 10.15 или новее",
      linux: "Веб-версия через браузер",
      ram: "2 ГБ ОЗУ (рекомендуется 4 ГБ)",
      storage: "3 ГБ свободного места",
    },
    changelog: [
      {
        version: "2024",
        date: "2024-01-06",
        changes: ["Новые функции анализа", "AI возможности", "Улучшения производительности"],
      },
    ],
  },
  "adobe-acrobat": {
    name: "Adobe Acrobat",
    description: "Программа для работы с PDF",
    image: "/images/adobe-acrobat.png",
    category: "Офис",
    developer: "Adobe Inc.",
    website: "https://www.adobe.com/acrobat.html",
    rating: 4.3,
    downloads: "50M+",
    lastUpdate: "2024-01-07",
    license: "Subscription",
    overview:
      "Adobe Acrobat — это программа для создания, редактирования и управления PDF документами с профессиональными возможностями.",
    features: [
      "Создание и редактирование PDF",
      "Электронные подписи",
      "Защита документов",
      "Совместная работа",
      "Конвертация форматов",
      "OCR распознавание текста",
      "Формы и аннотации",
      "Мобильные приложения",
    ],
    systemRequirements: {
      windows: "Windows 10 или новее",
      mac: "macOS 10.15 или новее",
      linux: "Не поддерживается",
      ram: "2 ГБ ОЗУ (рекомендуется 4 ГБ)",
      storage: "4.5 ГБ свободного места",
    },
    changelog: [
      {
        version: "2024.001.20643",
        date: "2024-01-07",
        changes: ["Новые AI функции", "Улучшения безопасности", "Обновления интерфейса"],
      },
    ],
  },
  "ms-word": {
    name: "Microsoft Word",
    description: "Текстовый процессор",
    image: "/images/ms-word.png",
    category: "Офис",
    developer: "Microsoft Corporation",
    website: "https://www.microsoft.com/en-us/microsoft-365/word",
    rating: 4.4,
    downloads: "1B+",
    lastUpdate: "2024-01-05",
    license: "Commercial",
    overview:
      "Microsoft Word — это текстовый процессор для создания, редактирования и форматирования документов, входящий в пакет Microsoft Office.",
    features: [
      "Создание и редактирование документов",
      "Богатые возможности форматирования",
      "Совместная работа в реальном времени",
      "Рецензирование и комментарии",
      "Шаблоны документов",
      "Интеграция с Office 365",
      "Проверка орфографии и грамматики",
      "Экспорт в различные форматы",
    ],
    systemRequirements: {
      windows: "Windows 10 или новее",
      mac: "macOS 10.15 или новее",
      linux: "Веб-версия через браузер",
      ram: "2 ГБ ОЗУ (рекомендуется 4 ГБ)",
      storage: "3 ГБ свободного места",
    },
    changelog: [
      {
        version: "2024",
        date: "2024-01-05",
        changes: ["AI функции написания", "Новые шаблоны", "Улучшения совместной работы"],
      },
    ],
  },
  // CMS/Движки
  wordpress: {
    name: "WordPress",
    description: "Популярная CMS",
    image: "/images/wordpress.png",
    category: "CMS/Движки",
    developer: "WordPress Foundation",
    website: "https://wordpress.org/",
    rating: 4.5,
    downloads: "75M+ sites",
    lastUpdate: "2024-01-16",
    license: "GPL v2+",
    overview:
      "WordPress — это система управления содержимым сайта с открытым исходным кодом, написанная на PHP и использующая в качестве базы данных MySQL. Сфера применения — от блогов до сложных новостных ресурсов и интернет-магазинов.",
    features: [
      "Простота использования и установки",
      "Тысячи бесплатных тем и плагинов",
      "SEO-оптимизация из коробки",
      "Мультисайтовость",
      "Встроенные функции безопасности",
      "Активное сообщество разработчиков",
      "Регулярные обновления",
      "Поддержка мультимедиа",
    ],
    systemRequirements: {
      windows: "Веб-сервер с PHP 7.4+",
      mac: "Веб-сервер с PHP 7.4+",
      linux: "Веб-сервер с PHP 7.4+",
      ram: "512 МБ ОЗУ (рекомендуется 1 ГБ)",
      storage: "1 ГБ свободного места",
    },
    changelog: [
      {
        version: "6.4.2",
        date: "2024-01-16",
        changes: ["Исправления безопасности", "Улучшения в редакторе блоков", "Оптимизация производительности"],
      },
    ],
  },
  "1c-bitrix": {
    name: "1C-Bitrix",
    description: "Российская система управления сайтами",
    image: "/images/1c-bitrix.png",
    category: "CMS/Движки",
    developer: "1С-Битрикс",
    website: "https://www.1c-bitrix.ru/",
    rating: 4.2,
    downloads: "200K+ sites",
    lastUpdate: "2023-12-25",
    license: "Commercial",
    overview:
      "1C-Битрикс — это российская система управления сайтами и интернет-магазинами с широкими возможностями настройки и интеграции.",
    features: [
      "Управление контентом",
      "Интернет-магазин",
      "CRM система",
      "Социальная сеть",
      "Мобильные приложения",
      "Интеграция с 1С",
      "Многосайтовость",
      "Система прав доступа",
    ],
    systemRequirements: {
      windows: "Веб-сервер с PHP 7.4+",
      mac: "Веб-сервер с PHP 7.4+",
      linux: "Веб-сервер с PHP 7.4+",
      ram: "1 ГБ ОЗУ (рекомендуется 2 ГБ)",
      storage: "2 ГБ свободного места",
    },
    changelog: [
      {
        version: "23.600.0",
        date: "2023-12-25",
        changes: ["Новые функции CRM", "Улучшения производительности", "Обновления безопасности"],
      },
    ],
  },
  drupal: {
    name: "Drupal",
    description: "Модульная CMS с открытым кодом",
    image: "/images/drupal.png",
    category: "CMS/Движки",
    developer: "Drupal Association",
    website: "https://www.drupal.org/",
    rating: 4.1,
    downloads: "1M+ sites",
    lastUpdate: "2024-01-10",
    license: "GPL v2+",
    overview:
      "Drupal — это модульная система управления контентом с открытым исходным кодом, предназначенная для создания сложных веб-сайтов и приложений.",
    features: [
      "Модульная архитектура",
      "Гибкая система типов контента",
      "Многосайтовость",
      "Мощная система прав",
      "API для разработчиков",
      "Мультиязычность",
      "Высокая производительность",
      "Безопасность",
    ],
    systemRequirements: {
      windows: "Веб-сервер с PHP 8.1+",
      mac: "Веб-сервер с PHP 8.1+",
      linux: "Веб-сервер с PHP 8.1+",
      ram: "512 МБ ОЗУ (рекомендуется 1 ГБ)",
      storage: "500 МБ свободного места",
    },
    changelog: [
      {
        version: "10.2.0",
        date: "2024-01-10",
        changes: ["Новые API", "Улучшения производительности", "Обновления безопасности"],
      },
    ],
  },
  joomla: {
    name: "Joomla",
    description: "CMS для создания веб-сайтов",
    image: "/images/joomla.png",
    category: "CMS/Движки",
    developer: "Open Source Matters",
    website: "https://www.joomla.org/",
    rating: 4.0,
    downloads: "3M+ sites",
    lastUpdate: "2024-01-12",
    license: "GPL v2+",
    overview:
      "Joomla — это система управления контентом для создания веб-сайтов с балансом между простотой использования и функциональностью.",
    features: [
      "Простота использования",
      "Гибкая система шаблонов",
      "Многоязычность",
      "Система расширений",
      "SEO-оптимизация",
      "Управление пользователями",
      "Мобильная адаптивность",
      "Безопасность",
    ],
    systemRequirements: {
      windows: "Веб-сервер с PHP 8.0+",
      mac: "Веб-сервер с PHP 8.0+",
      linux: "Веб-сервер с PHP 8.0+",
      ram: "512 МБ ОЗУ (рекомендуется 1 ГБ)",
      storage: "500 МБ свободного места",
    },
    changelog: [
      {
        version: "5.0.2",
        date: "2024-01-12",
        changes: ["Исправления безопасности", "Улучшения производительности", "Новые функции"],
      },
    ],
  },
  "moguta-cms": {
    name: "Moguta.CMS",
    description: "Российская CMS для интернет-магазинов",
    image: "/images/moguta.png",
    category: "CMS/Движки",
    developer: "Moguta",
    website: "https://moguta.ru/",
    rating: 4.3,
    downloads: "50K+ sites",
    lastUpdate: "2023-12-20",
    license: "Commercial",
    overview:
      "Moguta.CMS — это российская система управления контентом, специально разработанная для создания интернет-магазинов.",
    features: [
      "Интернет-магазин из коробки",
      "Интеграция с платежными системами",
      "Управление складом",
      "SEO-оптимизация",
      "Мобильная адаптивность",
      "Система скидок и акций",
      "Интеграция с 1С",
      "Техническая поддержка",
    ],
    systemRequirements: {
      windows: "Веб-сервер с PHP 7.4+",
      mac: "Веб-сервер с PHP 7.4+",
      linux: "Веб-сервер с PHP 7.4+",
      ram: "512 МБ ОЗУ (рекомендуется 1 ГБ)",
      storage: "1 ГБ свободного места",
    },
    changelog: [
      {
        version: "8.7.2",
        date: "2023-12-20",
        changes: ["Новые функции магазина", "Улучшения интерфейса", "Исправления ошибок"],
      },
    ],
  },
  bitrix24: {
    name: "Битрикс24",
    description: "Корпоративный портал и CRM",
    image: "/images/bitrix24.png",
    category: "CMS/Движки",
    developer: "1С-Битрикс",
    website: "https://www.bitrix24.ru/",
    rating: 4.4,
    downloads: "12M+ users",
    lastUpdate: "2024-01-08",
    license: "Freemium",
    overview:
      "Битрикс24 — это корпоративный портал и CRM-система для управления бизнес-процессами, проектами и взаимодействием с клиентами.",
    features: [
      "CRM система",
      "Управление проектами",
      "Корпоративный портал",
      "Интернет-магазин",
      "Телефония",
      "Чат и видеозвонки",
      "Документооборот",
      "Мобильные приложения",
    ],
    systemRequirements: {
      windows: "Любой современный браузер",
      mac: "Любой современный браузер",
      linux: "Любой современный браузер",
      ram: "2 ГБ ОЗУ",
      storage: "Не требуется (облачное решение)",
    },
    changelog: [
      {
        version: "24.100.0",
        date: "2024-01-08",
        changes: ["Новые функции CRM", "Улучшения мобильного приложения", "AI возможности"],
      },
    ],
  },
  // Специализированные инструменты
  "github-pack": {
    name: "GitHub Desktop",
    description: "Графический интерфейс для Git",
    image: "/images/github.png",
    category: "Специализированные инструменты",
    developer: "GitHub Inc.",
    website: "https://desktop.github.com/",
    rating: 4.3,
    downloads: "10M+",
    lastUpdate: "2024-01-05",
    license: "MIT License",
    overview:
      "GitHub Desktop — это графический интерфейс для работы с Git и GitHub, упрощающий управление репозиториями и совместную разработку.",
    features: [
      "Графический интерфейс Git",
      "Интеграция с GitHub",
      "Визуализация изменений",
      "Управление ветками",
      "Pull requests",
      "История коммитов",
      "Синхронизация с облаком",
      "Кроссплатформенность",
    ],
    systemRequirements: {
      windows: "Windows 10 или новее",
      mac: "macOS 10.13 или новее",
      linux: "Ubuntu 18.04+",
      ram: "1 ГБ ОЗУ",
      storage: "500 МБ свободного места",
    },
    changelog: [
      {
        version: "3.3.8",
        date: "2024-01-05",
        changes: ["Улучшения производительности", "Новые функции diff", "Исправления ошибок"],
      },
    ],
  },
  "zoho-show": {
    name: "Zoho Show",
    description: "Онлайн-инструмент для презентаций",
    image: "/images/zoho-show.png",
    category: "Специализированные инструменты",
    developer: "Zoho Corporation",
    website: "https://www.zoho.com/show/",
    rating: 4.2,
    downloads: "2M+",
    lastUpdate: "2023-12-28",
    license: "Freemium",
    overview:
      "Zoho Show — это онлайн-инструмент для создания презентаций с возможностями совместной работы и интеграцией с другими сервисами Zoho.",
    features: [
      "Онлайн создание презентаций",
      "Совместная работа в реальном времени",
      "Интеграция с Zoho Office",
      "Шаблоны и темы",
      "Анимации и переходы",
      "Презентация онлайн",
      "Экспорт в различные форматы",
      "Мобильные приложения",
    ],
    systemRequirements: {
      windows: "Любой современный браузер",
      mac: "Любой современный браузер",
      linux: "Любой современный браузер",
      ram: "1 ГБ ОЗУ",
      storage: "Не требуется (веб-приложение)",
    },
    changelog: [
      {
        version: "6.2.1",
        date: "2023-12-28",
        changes: ["Новые шаблоны", "Улучшения совместной работы", "Исправления ошибок"],
      },
    ],
  },
  slidesdog: {
    name: "SlideDog",
    description: "Инструмент для мультимедийных презентаций",
    image: "/images/slidesdog.png",
    category: "Специализированные инструменты",
    developer: "SlideDog",
    website: "https://slidedog.com/",
    rating: 4.1,
    downloads: "500K+",
    lastUpdate: "2023-11-20",
    license: "Freemium",
    overview:
      "SlideDog — это инструмент для создания мультимедийных презентаций, позволяющий объединять различные типы контента в одной презентации.",
    features: [
      "Мультимедийные презентации",
      "Поддержка различных форматов",
      "Интерактивные элементы",
      "Удаленное управление",
      "Аудитория может участвовать",
      "Живые опросы",
      "Социальные медиа интеграция",
      "Аналитика презентаций",
    ],
    systemRequirements: {
      windows: "Windows 10 или новее",
      mac: "macOS 10.14 или новее",
      linux: "Не поддерживается",
      ram: "2 ГБ ОЗУ (рекомендуется 4 ГБ)",
      storage: "1 ГБ свободного места",
    },
    changelog: [
      {
        version: "2.8.15",
        date: "2023-11-20",
        changes: ["Новые интерактивные функции", "Улучшения производительности", "Исправления ошибок"],
      },
    ],
  },
  emaze: {
    name: "Emaze",
    description: "Платформа для интерактивных презентаций",
    image: "/images/emaze.png",
    category: "Специализированные инструменты",
    developer: "Emaze",
    website: "https://www.emaze.com/",
    rating: 4.0,
    downloads: "1M+",
    lastUpdate: "2023-10-25",
    license: "Freemium",
    overview: "Emaze — это платформа для создания интерактивных презентаций с 3D эффектами и современными шаблонами.",
    features: [
      "3D презентации",
      "Интерактивные элементы",
      "Современные шаблоны",
      "Анимации и эффекты",
      "Совместная работа",
      "Аналитика просмотров",
      "Мобильная адаптивность",
      "Интеграция с социальными сетями",
    ],
    systemRequirements: {
      windows: "Любой современный браузер",
      mac: "Любой современный браузер",
      linux: "Любой современный браузер",
      ram: "1 ГБ ОЗУ",
      storage: "Не требуется (веб-приложение)",
    },
    changelog: [
      {
        version: "4.1.2",
        date: "2023-10-25",
        changes: ["Новые 3D эффекты", "Улучшения редактора", "Исправления ошибок"],
      },
    ],
  },
  powtoon: {
    name: "PowToon",
    description: "Инструмент для анимированных презентаций",
    image: "/images/powtoon.png",
    category: "Специализированные инструменты",
    developer: "PowToon Ltd.",
    website: "https://www.powtoon.com/",
    rating: 4.3,
    downloads: "30M+",
    lastUpdate: "2024-01-02",
    license: "Freemium",
    overview:
      "PowToon — это инструмент для создания анимированных презентаций и видео с профессиональными шаблонами и персонажами.",
    features: [
      "Анимированные презентации",
      "Создание видео",
      "Библиотека персонажей",
      "Профессиональные шаблоны",
      "Озвучка и музыка",
      "Совместная работа",
      "Экспорт в различные форматы",
      "Интеграция с LMS",
    ],
    systemRequirements: {
      windows: "Любой современный браузер",
      mac: "Любой современный браузер",
      linux: "Любой современный браузер",
      ram: "2 ГБ ОЗУ (рекомендуется 4 ГБ)",
      storage: "Не требуется (веб-приложение)",
    },
    changelog: [
      {
        version: "5.8.3",
        date: "2024-01-02",
        changes: ["Новые анимации", "Улучшения редактора", "Новые шаблоны"],
      },
    ],
  },
  fokus: {
    name: "Fokus",
    description: "Приложение для продуктивности",
    image: "/images/fokus.png",
    category: "Специализированные инструменты",
    developer: "Fokus Team",
    website: "https://fokus-website.netlify.app/",
    rating: 4.2,
    downloads: "100K+",
    lastUpdate: "2023-12-15",
    license: "Open Source",
    overview:
      "Fokus — это приложение для повышения продуктивности и концентрации с использованием техники Pomodoro и блокировкой отвлекающих сайтов.",
    features: [
      "Техника Pomodoro",
      "Блокировка сайтов",
      "Отслеживание времени",
      "Статистика продуктивности",
      "Настраиваемые интервалы",
      "Уведомления",
      "Темная тема",
      "Синхронизация между устройствами",
    ],
    systemRequirements: {
      windows: "Windows 10 или новее",
      mac: "macOS 10.14 или новее",
      linux: "Ubuntu 18.04+",
      ram: "512 МБ ОЗУ",
      storage: "100 МБ свободного места",
    },
    changelog: [
      {
        version: "2.1.0",
        date: "2023-12-15",
        changes: ["Новые функции статистики", "Улучшения интерфейса", "Исправления ошибок"],
      },
    ],
  },
  "adobe-spark": {
    name: "Adobe Spark",
    description: "Инструмент для создания контента",
    image: "/images/adobe-spark.png",
    category: "Специализированные инструменты",
    developer: "Adobe Inc.",
    website: "https://www.adobe.com/express/",
    rating: 4.4,
    downloads: "10M+",
    lastUpdate: "2024-01-03",
    license: "Freemium",
    overview:
      "Adobe Spark (теперь Adobe Express) — это инструмент для создания графики, веб-страниц и видео с профессиональными шаблонами.",
    features: [
      "Создание графики",
      "Веб-страницы",
      "Видео контент",
      "Профессиональные шаблоны",
      "Брендинг",
      "Анимации",
      "Социальные медиа форматы",
      "Интеграция с Creative Cloud",
    ],
    systemRequirements: {
      windows: "Любой современный браузер",
      mac: "Любой современный браузер",
      linux: "Любой современный браузер",
      ram: "2 ГБ ОЗУ",
      storage: "Не требуется (веб-приложение)",
    },
    changelog: [
      {
        version: "4.2.1",
        date: "2024-01-03",
        changes: ["Новые шаблоны", "AI функции", "Улучшения производительности"],
      },
    ],
  },
  docker: {
    name: "Docker",
    description: "Платформа для контейнеризации",
    image: "/images/docker.png",
    category: "Специализированные инструменты",
    developer: "Docker Inc.",
    website: "https://www.docker.com/",
    rating: 4.7,
    downloads: "13B+ pulls",
    lastUpdate: "2024-01-10",
    license: "Apache License 2.0",
    overview:
      "Docker — это платформа для разработки, доставки и запуска приложений в контейнерах, обеспечивающая изоляцию и портативность.",
    features: [
      "Контейнеризация приложений",
      "Изоляция процессов",
      "Портативность",
      "Масштабируемость",
      "Docker Hub",
      "Оркестрация",
      "CI/CD интеграция",
      "Микросервисы",
    ],
    systemRequirements: {
      windows: "Windows 10 Pro/Enterprise или новее",
      mac: "macOS 10.15 или новее",
      linux: "Большинство дистрибутивов",
      ram: "4 ГБ ОЗУ (рекомендуется 8 ГБ)",
      storage: "4 ГБ свободного места",
    },
    changelog: [
      {
        version: "24.0.7",
        date: "2024-01-10",
        changes: ["Улучшения безопасности", "Новые функции CLI", "Исправления ошибок"],
      },
    ],
  },
  jenkins: {
    name: "Jenkins",
    description: "Сервер автоматизации",
    image: "/images/jenkins.png",
    category: "Специализированные инструменты",
    developer: "Jenkins Community",
    website: "https://www.jenkins.io/",
    rating: 4.5,
    downloads: "25M+ installations",
    lastUpdate: "2024-01-08",
    license: "MIT License",
    overview:
      "Jenkins — это сервер автоматизации с открытым исходным кодом для непрерывной интеграции и непрерывной доставки (CI/CD).",
    features: [
      "Непрерывная интеграция",
      "Автоматизация сборки",
      "Тысячи плагинов",
      "Распределенные сборки",
      "Веб-интерфейс",
      "Интеграция с VCS",
      "Уведомления",
      "Масштабируемость",
    ],
    systemRequirements: {
      windows: "Windows 10 или новее",
      mac: "macOS 10.13 или новее",
      linux: "Большинство дистрибутивов",
      ram: "1 ГБ ОЗУ (рекомендуется 4 ГБ)",
      storage: "1 ГБ свободного места",
    },
    changelog: [
      {
        version: "2.440.1",
        date: "2024-01-08",
        changes: ["Обновления безопасности", "Улучшения производительности", "Новые API"],
      },
    ],
  },
  // Онлайн-платформы
  renderforest: {
    name: "Renderforest",
    description: "Онлайн-платформа для создания видео",
    image: "/images/renderforest.png",
    category: "Онлайн-платформы",
    developer: "Renderforest LLC",
    website: "https://www.renderforest.com/",
    rating: 4.3,
    downloads: "15M+ users",
    lastUpdate: "2024-01-04",
    license: "Freemium",
    overview:
      "Renderforest — это онлайн-платформа для создания видео, логотипов, сайтов и графики с использованием готовых шаблонов.",
    features: [
      "Создание видео",
      "Дизайн логотипов",
      "Конструктор сайтов",
      "Графический дизайн",
      "Анимация",
      "Музыкальная библиотека",
      "HD качество",
      "Коммерческая лицензия",
    ],
    systemRequirements: {
      windows: "Любой современный браузер",
      mac: "Любой современный браузер",
      linux: "Любой современный браузер",
      ram: "2 ГБ ОЗУ",
      storage: "Не требуется (веб-приложение)",
    },
    changelog: [
      {
        version: "8.1.2",
        date: "2024-01-04",
        changes: ["Новые шаблоны видео", "Улучшения редактора", "AI функции"],
      },
    ],
  },
  venngage: {
    name: "Venngage",
    description: "Инструмент для создания инфографики",
    image: "/images/venngage.png",
    category: "Онлайн-платформы",
    developer: "Venngage Inc.",
    website: "https://venngage.com/",
    rating: 4.4,
    downloads: "10M+ users",
    lastUpdate: "2023-12-20",
    license: "Freemium",
    overview:
      "Venngage — это инструмент для создания инфографики и визуального контента с профессиональными шаблонами и элементами дизайна.",
    features: [
      "Создание инфографики",
      "Отчеты и презентации",
      "Диаграммы и графики",
      "Иконки и иллюстрации",
      "Совместная работа",
      "Брендинг",
      "Экспорт в высоком качестве",
      "Интерактивные элементы",
    ],
    systemRequirements: {
      windows: "Любой современный браузер",
      mac: "Любой современный браузер",
      linux: "Любой современный браузер",
      ram: "1 ГБ ОЗУ",
      storage: "Не требуется (веб-приложение)",
    },
    changelog: [
      {
        version: "5.3.1",
        date: "2023-12-20",
        changes: ["Новые шаблоны", "Улучшения редактора", "Интерактивные функции"],
      },
    ],
  },
  "google-slides": {
    name: "Google Slides",
    description: "Онлайн-редактор презентаций от Google",
    image: "/images/google-slides.png",
    category: "Онлайн-платформы",
    developer: "Google LLC",
    website: "https://docs.google.com/presentation/",
    rating: 4.5,
    downloads: "2B+ users",
    lastUpdate: "2024-01-06",
    license: "Freeware",
    overview:
      "Google Slides — это бесплатный онлайн-редактор презентаций от Google с возможностями совместной работы в реальном времени.",
    features: [
      "Онлайн создание презентаций",
      "Совместная работа в реальном времени",
      "Автоматическое сохранение",
      "Интеграция с Google Drive",
      "Шаблоны и темы",
      "Комментарии и предложения",
      "Презентация онлайн",
      "Мобильные приложения",
    ],
    systemRequirements: {
      windows: "Любой современный браузер",
      mac: "Любой современный браузер",
      linux: "Любой современный браузер",
      ram: "1 ГБ ОЗУ",
      storage: "Не требуется (веб-приложение)",
    },
    changelog: [
      {
        version: "Continuous",
        date: "2024-01-06",
        changes: ["Новые функции AI", "Улучшения производительности", "Новые шаблоны"],
      },
    ],
  },
  canva: {
    name: "Canva",
    description: "Онлайн-платформа для графического дизайна",
    image: "/images/canva.png",
    category: "Онлайн-платформы",
    developer: "Canva Pty Ltd",
    website: "https://www.canva.com/",
    rating: 4.7,
    downloads: "135M+ users",
    lastUpdate: "2024-01-09",
    license: "Freemium",
    overview:
      "Canva — это онлайн-платформа для графического дизайна, позволяющая создавать профессиональные дизайны без специальных навыков.",
    features: [
      "Графический дизайн",
      "Тысячи шаблонов",
      "Библиотека элементов",
      "Совместная работа",
      "Брендинг",
      "Анимации",
      "Печать и доставка",
      "AI функции",
    ],
    systemRequirements: {
      windows: "Любой современный браузер",
      mac: "Любой современный браузер",
      linux: "Любой современный браузер",
      ram: "2 ГБ ОЗУ",
      storage: "Не требуется (веб-приложение)",
    },
    changelog: [
      {
        version: "Continuous",
        date: "2024-01-09",
        changes: ["Новые AI инструменты", "Улучшения редактора", "Новые шаблоны"],
      },
    ],
  },
  "beautiful-ai": {
    name: "Beautiful.ai",
    description: "AI-платформа для презентаций",
    image: "/images/beautiful-ai.png",
    category: "Онлайн-платформы",
    developer: "Beautiful.ai",
    website: "https://www.beautiful.ai/",
    rating: 4.2,
    downloads: "5M+ users",
    lastUpdate: "2023-12-18",
    license: "Freemium",
    overview:
      "Beautiful.ai — это ИИ-платформа для создания красивых презентаций с автоматическим дизайном и умными шаблонами.",
    features: [
      "AI-powered дизайн",
      "Умные шаблоны",
      "Автоматическое форматирование",
      "Совместная работа",
      "Аналитика презентаций",
      "Интеграция с другими сервисами",
      "Брендинг",
      "Экспорт в различные форматы",
    ],
    systemRequirements: {
      windows: "Любой современный браузер",
      mac: "Любой современный браузер",
      linux: "Любой современный браузер",
      ram: "2 ГБ ОЗУ",
      storage: "Не требуется (веб-приложение)",
    },
    changelog: [
      {
        version: "4.5.2",
        date: "2023-12-18",
        changes: ["Новые AI функции", "Улучшения шаблонов", "Исправления ошибок"],
      },
    ],
  },
  prezi: {
    name: "Prezi",
    description: "Платформа для динамических презентаций",
    image: "/images/prezi.png",
    category: "Онлайн-платформы",
    developer: "Prezi Inc.",
    website: "https://prezi.com/",
    rating: 4.1,
    downloads: "100M+ users",
    lastUpdate: "2024-01-07",
    license: "Freemium",
    overview: "Prezi — это платформа для создания динамических презентаций с нелинейной навигацией и зумированием.",
    features: [
      "Динамические презентации",
      "Зумирование и панорамирование",
      "Нелинейная навигация",
      "Совместная работа",
      "Аналитика презентаций",
      "Видео презентации",
      "Интерактивные элементы",
      "Мобильные приложения",
    ],
    systemRequirements: {
      windows: "Любой современный браузер",
      mac: "Любой современный браузер",
      linux: "Любой современный браузер",
      ram: "2 ГБ ОЗУ",
      storage: "Не требуется (веб-приложение)",
    },
    changelog: [
      {
        version: "6.26.0",
        date: "2024-01-07",
        changes: ["Новые функции видео", "Улучшения производительности", "Новые шаблоны"],
      },
    ],
  },
}

interface PageProps {
  params: {
    id: string
  }
}

export default function InfoPage({ params }: PageProps) {
  const program = programsInfo[params.id as keyof typeof programsInfo]

  if (!program) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Назад к каталогу
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                    <Image
                      src={program.image || "/placeholder.svg"}
                      alt={program.name}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-3xl">{program.name}</CardTitle>
                      <Badge variant="secondary">{program.category}</Badge>
                    </div>
                    <CardDescription className="text-lg mb-3">{program.description}</CardDescription>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{program.rating}</span>
                      </div>

                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{program.downloads} скачиваний</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Описание программы</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed mb-4">{program.overview}</p>

                  <div className="grid sm:grid-cols-2 gap-4 mt-6">
                    <h4 className="font-semibold mb-3 col-span-full">Основные возможности:</h4>
                    {program.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Системные требования</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">Windows</h4>
                      <p className="text-gray-600">{program.systemRequirements.windows}</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">macOS</h4>
                      <p className="text-gray-600">{program.systemRequirements.mac}</p>
                    </div>
                    {program.systemRequirements.linux && (
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold mb-2">Linux</h4>
                        <p className="text-gray-600">{program.systemRequirements.linux}</p>
                      </div>
                    )}
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">Оперативная память</h4>
                      <p className="text-gray-600">{program.systemRequirements.ram}</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">Место на диске</h4>
                      <p className="text-gray-600">{program.systemRequirements.storage}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>История версий</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {program.changelog.map((version, index) => (
                      <div key={index} className="border-l-2 border-blue-200 pl-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">v{version.version}</Badge>
                          <span className="text-sm text-gray-500">{version.date}</span>
                        </div>
                        <ul className="space-y-1">
                          {version.changes.map((change, changeIndex) => (
                            <li key={changeIndex} className="text-sm text-gray-600 flex items-start gap-2">
                              <span className="text-green-500 mt-1">•</span>
                              {change}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Действия</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" asChild>
                  <Link href={`/download/${params.id}`}>
                    <Download className="h-4 w-4 mr-2" />
                    Скачать программу
                  </Link>
                </Button>

                <Button variant="outline" className="w-full" asChild>
                  <a href={program.website} target="_blank" rel="noopener noreferrer">
                    <Globe className="h-4 w-4 mr-2" />
                    Официальный сайт
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <span className="font-medium">Разработчик:</span>
                  <p className="text-gray-600">{program.developer}</p>
                </div>
                <div>
                  <span className="font-medium">Лицензия:</span>
                  <p className="text-gray-600">{program.license}</p>
                </div>
                <div>
                  <span className="font-medium">Рейтинг:</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-gray-600">{program.rating}/5</span>
                  </div>
                </div>
                <div>
                  <span className="font-medium">Последнее обновление:</span>
                  <p className="text-gray-600">{program.lastUpdate}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
