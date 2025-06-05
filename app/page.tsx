"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Info, Server, Database, Code, Palette, TestTube, FileText, Globe, Wrench } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Search } from "lucide-react"

const categories = [
  {
    id: "servers",
    title: "Сервера",
    icon: Server,
    color: "bg-blue-500",
    programs: [
      {
        id: "open-server",
        name: "Open Server",
        description: "Локальный веб-сервер для разработки с поддержкой Apache, Nginx, PHP, MySQL",
        image: "/images/open-server.png",
        officialUrl: "https://ospanel.io/",
      },
      {
        id: "sql-server-2022",
        name: "SQL Server 2022",
        description: "Система управления базами данных Microsoft с поддержкой облачных технологий",
        image: "/images/sql-server.png",
        officialUrl: "https://www.microsoft.com/en-us/sql-server/sql-server-downloads",
      },
    ],
  },
  {
    id: "database",
    title: "СУБД",
    icon: Database,
    color: "bg-green-500",
    programs: [
      {
        id: "ssms",
        name: "SQL Server Management Studio",
        description: "Интегрированная среда для управления инфраструктурой SQL Server",
        image: "/images/ssms.png",
        officialUrl: "https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms",
      },
      {
        id: "sqlite-expert",
        name: "SQLite Expert Professional",
        description: "Мощный инструмент для администрирования и разработки баз данных SQLite",
        image: "/images/sqlite-expert.png",
        officialUrl: "http://www.sqliteexpert.com/",
      },
      {
        id: "ms-query",
        name: "Microsoft Query",
        description: "Инструмент для создания запросов к внешним источникам данных",
        image: "/images/ms-query.png",
        officialUrl:
          "https://support.microsoft.com/en-us/office/introduction-to-microsoft-query-ca69e0f0-3435-42f4-9a27-6f3f3fd35878",
      },
      {
        id: "ms-access",
        name: "Microsoft Access",
        description: "Система управления базами данных для создания настольных приложений",
        image: "/images/ms-access.png",
        officialUrl: "https://www.microsoft.com/en-us/microsoft-365/access",
      },
      {
        id: "openoffice-base",
        name: "OpenOffice Base",
        description: "Бесплатная система управления базами данных из пакета OpenOffice",
        image: "/images/openoffice-base.png",
        officialUrl: "https://www.openoffice.org/product/base.html",
      },
    ],
  },
  {
    id: "programming",
    title: "Программирование",
    icon: Code,
    color: "bg-blue-600",
    programs: [
      {
        id: "vscode",
        name: "Visual Studio Code",
        description: "Современный редактор кода с поддержкой множества языков и расширений",
        image: "/images/vscode.png",
        officialUrl: "https://code.visualstudio.com/",
      },
      {
        id: "notepad-plus",
        name: "Notepad++",
        description: "Бесплатный редактор исходного кода с подсветкой синтаксиса",
        image: "/images/notepad-plus.png",
        officialUrl: "https://notepad-plus-plus.org/",
      },
      {
        id: "bootstrap-studio",
        name: "Bootstrap Studio",
        description: "Мощный инструмент для создания адаптивных веб-сайтов с Bootstrap",
        image: "/images/bootstrap-studio.png",
        officialUrl: "https://bootstrapstudio.io/",
      },
      {
        id: "visual-studio-2022",
        name: "Visual Studio 2022",
        description: "Интегрированная среда разработки для создания приложений",
        image: "/images/visual-studio.png",
        officialUrl: "https://visualstudio.microsoft.com/vs/",
      },
      {
        id: "webstorm",
        name: "WebStorm",
        description: "Интеллектуальная IDE для современной веб-разработки от JetBrains",
        image: "/images/webstorm.png",
        officialUrl: "https://www.jetbrains.com/webstorm/",
      },
      {
        id: "1c-enterprise",
        name: "1C Предприятие",
        description: "Платформа для разработки и сопровождения прикладных решений",
        image: "/images/1c.png",
        officialUrl: "https://v8.1c.ru/",
      },
      {
        id: "python-idle",
        name: "IDLE (Python 3.6 32-bit)",
        description: "Интегрированная среда разработки и обучения для Python",
        image: "/images/python-idle.png",
        officialUrl: "https://www.python.org/downloads/",
      },
      {
        id: "intellij-idea",
        name: "IntelliJ IDEA",
        description: "Интегрированная среда разработки для Java и других языков",
        image: "/images/intellij.png",
        officialUrl: "https://www.jetbrains.com/idea/",
      },
      {
        id: "pycharm",
        name: "PyCharm",
        description: "Профессиональная IDE для разработки на Python",
        image: "/images/pycharm.png",
        officialUrl: "https://www.jetbrains.com/pycharm/",
      },
    ],
  },
  {
    id: "design-modeling",
    title: "Проектирование",
    icon: Wrench,
    color: "bg-orange-500",
    programs: [
      {
        id: "process-modeler",
        name: "Process Modeler",
        description: "Инструмент для моделирования и анализа бизнес-процессов",
        image: "/images/process-modeler.png",
        officialUrl: "https://www.itp-commerce.com/",
      },
      {
        id: "ramus",
        name: "Ramus",
        description: "CASE-система для структурного анализа и проектирования",
        image: "/images/ramus.png",
        officialUrl: "http://ramussoftware.com/",
      },
      {
        id: "draw-io",
        name: "Draw.io",
        description: "Бесплатный онлайн-редактор диаграмм и схем",
        image: "/images/draw-io.png",
        officialUrl: "https://app.diagrams.net/",
      },
      {
        id: "mydraw",
        name: "MyDraw",
        description: "Профессиональный инструмент для создания диаграмм и векторной графики",
        image: "/images/mydraw.png",
        officialUrl: "https://www.nevron.com/products-open-vision-mydraw-overview.aspx",
      },
      {
        id: "edrawmax",
        name: "EdrawMax",
        description: "Универсальное решение для создания диаграмм любого типа",
        image: "/images/edrawmax.png",
        officialUrl: "https://www.edrawsoft.com/edraw-max/",
      },
      {
        id: "balsamiq",
        name: "Balsamiq Wireframes",
        description: "Инструмент для быстрого создания макетов пользовательских интерфейсов",
        image: "/images/balsamiq.png",
        officialUrl: "https://balsamiq.com/wireframes/",
      },
      {
        id: "adobe-xd",
        name: "Adobe Experience Design (Adobe XD)",
        description: "Инструмент для дизайна и прототипирования пользовательского опыта",
        image: "/images/adobe-xd.png",
        officialUrl: "https://www.adobe.com/products/xd.html",
      },
      {
        id: "ms-visio",
        name: "Microsoft Visio",
        description: "Профессиональный инструмент для создания диаграмм и схем",
        image: "/images/ms-visio.png",
        officialUrl: "https://www.microsoft.com/en-us/microsoft-365/visio/flowchart-software",
      },
    ],
  },
  {
    id: "design",
    title: "Дизайн",
    icon: Palette,
    color: "bg-pink-500",
    programs: [
      {
        id: "figma",
        name: "Figma",
        description: "Современный инструмент для UI/UX дизайна с совместной работой",
        image: "/images/figma.png",
        officialUrl: "https://www.figma.com/",
      },
      {
        id: "axure",
        name: "Axure RP",
        description: "Инструмент для создания интерактивных прототипов и спецификаций",
        image: "/images/axure.png",
        officialUrl: "https://www.axure.com/",
      },
      {
        id: "adobe-photoshop",
        name: "Adobe Photoshop",
        description: "Профессиональный редактор растровых изображений",
        image: "/images/photoshop.png",
        officialUrl: "https://www.adobe.com/products/photoshop.html",
      },
      {
        id: "adobe-muse",
        name: "Adobe Muse",
        description: "Инструмент для создания веб-сайтов без программирования",
        image: "/images/adobe-muse.png",
        officialUrl: "https://www.adobe.com/products/muse.html",
      },
      {
        id: "colormania",
        name: "ColorMania",
        description: "Инструмент для работы с цветами и палитрами",
        image: "/images/colormania.png",
        officialUrl: "http://www.blacksunsoftware.com/colormania.html",
      },
    ],
  },
  {
    id: "frameworks",
    title: "Фреймворки JavaScript",
    icon: Code,
    color: "bg-cyan-500",
    programs: [
      {
        id: "react",
        name: "React",
        description: "JavaScript библиотека для создания пользовательских интерфейсов",
        image: "/images/react.png",
        officialUrl: "https://reactjs.org/",
      },
      {
        id: "vuejs",
        name: "Vue.js",
        description: "Прогрессивный JavaScript фреймворк для создания UI",
        image: "/images/vuejs.png",
        officialUrl: "https://vuejs.org/",
      },
      {
        id: "angular",
        name: "Angular",
        description: "Платформа для создания мобильных и десктопных веб-приложений",
        image: "/images/angular.png",
        officialUrl: "https://angular.io/",
      },
      {
        id: "nextjs",
        name: "Next.js",
        description: "React фреймворк для production-ready приложений",
        image: "/images/nextjs.png",
        officialUrl: "https://nextjs.org/",
      },
      {
        id: "preact",
        name: "Preact",
        description: "Быстрая 3kB альтернатива React с тем же современным API",
        image: "/images/preact.png",
        officialUrl: "https://preactjs.com/",
      },
      {
        id: "slidebean",
        name: "Slidebean",
        description: "Платформа для создания профессиональных презентаций",
        image: "/images/slidebean.png",
        officialUrl: "https://slidebean.com/",
      },
    ],
  },
  {
    id: "presentation",
    title: "Презентации",
    icon: FileText,
    color: "bg-emerald-500",
    programs: [
      {
        id: "ms-powerpoint",
        name: "Microsoft PowerPoint",
        description: "Программа для создания и проведения презентаций",
        image: "/images/ms-powerpoint.png",
        officialUrl: "https://www.microsoft.com/en-us/microsoft-365/powerpoint",
      },
      {
        id: "apple-keynote",
        name: "Apple Keynote",
        description: "Приложение для создания презентаций от Apple",
        image: "/images/keynote.png",
        officialUrl: "https://www.apple.com/keynote/",
      },
      {
        id: "libreoffice-impress",
        name: "LibreOffice Impress",
        description: "Бесплатная программа для создания презентаций",
        image: "/images/libreoffice-impress.png",
        officialUrl: "https://www.libreoffice.org/discover/impress/",
      },
      {
        id: "wps-presentation",
        name: "WPS Presentation",
        description: "Бесплатная альтернатива PowerPoint от WPS Office",
        image: "/images/wps-presentation.png",
        officialUrl: "https://www.wps.com/presentation/",
      },
      {
        id: "softmaker-presentations",
        name: "SoftMaker Presentations",
        description: "Профессиональная программа для создания презентаций",
        image: "/images/softmaker.png",
        officialUrl: "https://www.softmaker.com/en/softmaker-office-presentations",
      },
      {
        id: "visme",
        name: "Visme",
        description: "Онлайн-инструмент для создания презентаций и инфографики",
        image: "/images/visme.png",
        officialUrl: "https://www.visme.co/",
      },
    ],
  },
  {
    id: "specialized-tools",
    title: "Специализированные инструменты",
    icon: Wrench,
    color: "bg-amber-500",
    programs: [
      {
        id: "github-pack",
        name: "GitHub Desktop",
        description: "Графический интерфейс для работы с Git и GitHub",
        image: "/images/github.png",
        officialUrl: "https://desktop.github.com/",
      },
      {
        id: "zoho-show",
        name: "Zoho Show",
        description: "Онлайн-инструмент для создания презентаций",
        image: "/images/zoho-show.png",
        officialUrl: "https://www.zoho.com/show/",
      },
      {
        id: "slidesdog",
        name: "SlideDog",
        description: "Инструмент для создания мультимедийных презентаций",
        image: "/images/slidesdog.png",
        officialUrl: "https://slidedog.com/",
      },
      {
        id: "emaze",
        name: "Emaze",
        description: "Платформа для создания интерактивных презентаций",
        image: "/images/emaze.png",
        officialUrl: "https://www.emaze.com/",
      },
      {
        id: "powtoon",
        name: "PowToon",
        description: "Инструмент для создания анимированных презентаций и видео",
        image: "/images/powtoon.png",
        officialUrl: "https://www.powtoon.com/",
      },
      {
        id: "fokus",
        name: "Fokus",
        description: "Приложение для повышения продуктивности и концентрации",
        image: "/images/fokus.png",
        officialUrl: "https://fokus-website.netlify.app/",
      },
      {
        id: "adobe-spark",
        name: "Adobe Spark",
        description: "Инструмент для создания графики, веб-страниц и видео",
        image: "/images/adobe-spark.png",
        officialUrl: "https://www.adobe.com/express/",
      },
      {
        id: "docker",
        name: "Docker",
        description: "Платформа для разработки, доставки и запуска приложений",
        image: "/images/docker.png",
        officialUrl: "https://www.docker.com/",
      },
      {
        id: "jenkins",
        name: "Jenkins",
        description: "Сервер автоматизации с открытым исходным кодом",
        image: "/images/jenkins.png",
        officialUrl: "https://www.jenkins.io/",
      },
    ],
  },
  {
    id: "online-platforms",
    title: "Онлайн-платформы",
    icon: Globe,
    color: "bg-violet-500",
    programs: [
      {
        id: "renderforest",
        name: "Renderforest",
        description: "Онлайн-платформа для создания видео, логотипов и сайтов",
        image: "/images/renderforest.png",
        officialUrl: "https://www.renderforest.com/",
      },
      {
        id: "venngage",
        name: "Venngage",
        description: "Инструмент для создания инфографики и визуального контента",
        image: "/images/venngage.png",
        officialUrl: "https://venngage.com/",
      },
      {
        id: "google-slides",
        name: "Google Slides",
        description: "Бесплатный онлайн-редактор презентаций от Google",
        image: "/images/google-slides.png",
        officialUrl: "https://docs.google.com/presentation/",
      },
      {
        id: "canva",
        name: "Canva",
        description: "Онлайн-платформа для графического дизайна",
        image: "/images/canva.png",
        officialUrl: "https://www.canva.com/",
      },
      {
        id: "beautiful-ai",
        name: "Beautiful.ai",
        description: "ИИ-платформа для создания красивых презентаций",
        image: "/images/beautiful-ai.png",
        officialUrl: "https://www.beautiful.ai/",
      },
      {
        id: "prezi",
        name: "Prezi",
        description: "Платформа для создания динамических презентаций",
        image: "/images/prezi.png",
        officialUrl: "https://prezi.com/",
      },
    ],
  },
  {
    id: "testing",
    title: "Тестирование",
    icon: TestTube,
    color: "bg-red-500",
    programs: [
      {
        id: "postman",
        name: "Postman",
        description: "Платформа для разработки и тестирования API",
        image: "/images/postman.png",
        officialUrl: "https://www.postman.com/",
      },
      {
        id: "jira",
        name: "Jira",
        description: "Система отслеживания задач и управления проектами",
        image: "/images/jira.png",
        officialUrl: "https://www.atlassian.com/software/jira",
      },
    ],
  },
  {
    id: "office",
    title: "Офис",
    icon: FileText,
    color: "bg-indigo-500",
    programs: [
      {
        id: "ms-project",
        name: "Microsoft Project",
        description: "Система управления проектами от Microsoft",
        image: "/images/ms-project.png",
        officialUrl: "https://www.microsoft.com/en-us/microsoft-365/project/project-management-software",
      },
      {
        id: "ms-excel",
        name: "Microsoft Excel",
        description: "Программа для работы с электронными таблицами",
        image: "/images/ms-excel.png",
        officialUrl: "https://www.microsoft.com/en-us/microsoft-365/excel",
      },
      {
        id: "adobe-acrobat",
        name: "Adobe Acrobat",
        description: "Программа для создания и редактирования PDF документов",
        image: "/images/adobe-acrobat.png",
        officialUrl: "https://www.adobe.com/acrobat.html",
      },
      {
        id: "ms-word",
        name: "Microsoft Word",
        description: "Текстовый процессор для создания документов",
        image: "/images/ms-word.png",
        officialUrl: "https://www.microsoft.com/en-us/microsoft-365/word",
      },
    ],
  },
  {
    id: "cms",
    title: "CMS/Движки",
    icon: Globe,
    color: "bg-teal-500",
    programs: [
      {
        id: "wordpress",
        name: "WordPress",
        description: "Популярная система управления контентом для создания сайтов",
        image: "/images/wordpress.png",
        officialUrl: "https://wordpress.org/",
      },
      {
        id: "1c-bitrix",
        name: "1C-Bitrix",
        description: "Российская система управления сайтами и интернет-магазинами",
        image: "/images/1c-bitrix.png",
        officialUrl: "https://www.1c-bitrix.ru/",
      },
      {
        id: "drupal",
        name: "Drupal",
        description: "Модульная система управления контентом с открытым кодом",
        image: "/images/drupal.png",
        officialUrl: "https://www.drupal.org/",
      },
      {
        id: "joomla",
        name: "Joomla",
        description: "Система управления контентом для создания веб-сайтов",
        image: "/images/joomla.png",
        officialUrl: "https://www.joomla.org/",
      },
      {
        id: "moguta-cms",
        name: "Moguta.CMS",
        description: "Российская CMS для создания интернет-магазинов",
        image: "/images/moguta.png",
        officialUrl: "https://moguta.ru/",
      },
      {
        id: "bitrix24",
        name: "Битрикс24",
        description: "Корпоративный портал и CRM-система",
        image: "/images/bitrix24.png",
        officialUrl: "https://www.bitrix24.ru/",
      },
    ],
  },
]

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Фильтрация программ по поисковому запросу и выбранной категории
  const filteredCategories = useMemo(() => {
    let filtered = categories

    // Фильтрация по выбранной категории
    if (selectedCategory) {
      filtered = filtered.filter((category) => category.id === selectedCategory)
    }

    // Фильтрация по поисковому запросу
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered
        .map((category) => ({
          ...category,
          programs: category.programs.filter(
            (program) =>
              program.name.toLowerCase().includes(query) || program.description.toLowerCase().includes(query),
          ),
        }))
        .filter((category) => category.programs.length > 0)
    }

    return filtered
  }, [searchQuery, selectedCategory])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setSelectedCategory(null) // Сбрасываем выбранную категорию при поиске
  }

  const handleCategorySelect = (categoryId: string | null) => {
    setSelectedCategory(categoryId)
    setSearchQuery("") // Сбрасываем поиск при выборе категории
  }

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategory(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header onSearch={handleSearch} onCategorySelect={handleCategorySelect} />

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            <Code className="h-4 w-4" />
            Более 100+ программ в каталоге
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Центр программного
            <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              обеспечения
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Найдите и скачайте необходимые программы для разработки, дизайна, тестирования и работы
          </p>
        </div>

        {/* Filters Info */}
        {(searchQuery || selectedCategory) && (
          <div className="mb-8 flex items-center justify-between bg-white rounded-lg p-4 shadow-sm border">
            <div className="flex items-center gap-4">
              {searchQuery && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Поиск:</span>
                  <Badge variant="secondary">"{searchQuery}"</Badge>
                </div>
              )}
              {selectedCategory && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Категория:</span>
                  <Badge variant="secondary">{categories.find((cat) => cat.id === selectedCategory)?.title}</Badge>
                </div>
              )}
            </div>
            <Button variant="outline" size="sm" onClick={clearFilters}>
              Сбросить фильтры
            </Button>
          </div>
        )}

        {/* Results */}
        {filteredCategories.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Ничего не найдено</h3>
            <p className="text-gray-600 mb-4">Попробуйте изменить поисковый запрос или выбрать другую категорию</p>
            <Button onClick={clearFilters}>Показать все программы</Button>
          </div>
        ) : (
          <div className="space-y-12">
            {filteredCategories.map((category) => {
              const IconComponent = category.icon
              return (
                <div key={category.id} id={category.id} className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-lg ${category.color}`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                    <Badge variant="secondary" className="ml-2">
                      {category.programs.length} программ
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {category.programs.map((program) => (
                      <Card key={program.id} className="hover:shadow-lg transition-shadow duration-200 flex flex-col">
                        <CardHeader className="pb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                              <Image
                                src={program.image || "/placeholder.svg"}
                                alt={program.name}
                                width={48}
                                height={48}
                                className="object-contain"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <CardTitle className="text-lg leading-tight line-clamp-2">{program.name}</CardTitle>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0 flex-1 flex flex-col">
                          <CardDescription className="text-sm mb-4 line-clamp-3 flex-1">
                            {program.description}
                          </CardDescription>
                          <div className="flex gap-2 mt-auto">
                            <a href={program.officialUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                              <Button className="w-full" size="sm">
                                <Download className="h-4 w-4 mr-2" />
                                Скачать
                              </Button>
                            </a>
                            <Link href={`/info/${program.id}`}>
                              <Button variant="outline" size="sm" className="px-3">
                                <Info className="h-4 w-4" />
                              </Button>
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
