import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, ArrowLeft, ExternalLink, Shield, HardDrive, Monitor } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

// Данные программ (в реальном проекте это может быть база данных)
const programsData = {
  // Сервера
  "open-server": {
    name: "Open Server",
    description: "Локальный веб-сервер для разработки с поддержкой Apache, Nginx, PHP, MySQL",
    fullDescription:
      "Open Server Panel — это портативная серверная платформа и программная среда, созданная специально для веб-разработчиков с учётом их рекомендаций и пожеланий. Включает в себя Apache, Nginx, PHP разных версий, MySQL, PostgreSQL и множество других компонентов.",
    version: "5.4.8",
    size: "156 MB",
    requirements: "Windows 7/8/10/11",
    category: "Сервера",
    image: "/images/open-server.png",
    downloadUrl: "https://ospanel.io/",
    features: [
      "Поддержка Apache и Nginx",
      "Множество версий PHP",
      "MySQL и PostgreSQL",
      "Портативность",
      "Простая настройка",
      "Модульная архитектура",
    ],
  },
  "sql-server-2022": {
    name: "SQL Server 2022",
    description: "Система управления базами данных Microsoft с поддержкой облачных технологий",
    fullDescription:
      "Microsoft SQL Server 2022 — это реляционная система управления базами данных, которая обеспечивает высокую производительность, безопасность и аналитические возможности для критически важных приложений.",
    version: "2022",
    size: "1.2 GB",
    requirements: "Windows Server 2016+, Windows 10+",
    category: "Сервера",
    image: "/images/sql-server.png",
    downloadUrl: "https://www.microsoft.com/en-us/sql-server/sql-server-downloads",
    features: [
      "Высокая производительность",
      "Встроенная безопасность",
      "Облачная интеграция",
      "Аналитика в реальном времени",
      "Машинное обучение",
      "Гибридные сценарии",
    ],
  },
  // Программирование
  vscode: {
    name: "Visual Studio Code",
    description: "Современный редактор кода от Microsoft с поддержкой множества языков программирования и расширений.",
    fullDescription:
      "Visual Studio Code — это легкий, но мощный редактор исходного кода, который работает на вашем рабочем столе и доступен для Windows, macOS и Linux. Он поставляется со встроенной поддержкой JavaScript, TypeScript и Node.js и имеет богатую экосистему расширений для других языков и сред выполнения.",
    version: "1.85.2",
    size: "95.2 MB",
    requirements: "Windows 10/11, macOS 10.15+, Linux",
    category: "Программирование",
    image: "/images/vscode.png",
    downloadUrl: "https://code.visualstudio.com/",
    features: [
      "Интеллектуальное автодополнение",
      "Встроенный терминал",
      "Отладчик",
      "Интеграция с Git",
      "Тысячи расширений",
      "Поддержка множества языков",
    ],
  },
  "notepad-plus": {
    name: "Notepad++",
    description: "Бесплатный редактор исходного кода с подсветкой синтаксиса",
    fullDescription:
      "Notepad++ — это бесплатный редактор исходного кода и замена Блокнота, который поддерживает несколько языков программирования. Работает в среде MS Windows и распространяется под лицензией GPL.",
    version: "8.6.2",
    size: "4.1 MB",
    requirements: "Windows 7/8/10/11",
    category: "Программирование",
    image: "/images/notepad-plus.png",
    downloadUrl: "https://notepad-plus-plus.org/",
    features: [
      "Подсветка синтаксиса",
      "Поддержка множества языков",
      "Система плагинов",
      "Поиск и замена с регулярными выражениями",
      "Автодополнение",
      "Макросы",
    ],
  },
  // Дизайн
  figma: {
    name: "Figma",
    description: "Современный инструмент для UI/UX дизайна с возможностью совместной работы в реальном времени.",
    fullDescription:
      "Figma — это веб-приложение для совместного интерфейсного дизайна с дополнительными офлайн-функциями, включенными в настольные приложения для macOS и Windows. Функции Figma сосредоточены на использовании в пользовательском интерфейсе и дизайне пользовательского опыта, с акцентом на совместную работу в реальном времени.",
    version: "Desktop App",
    size: "78.5 MB",
    requirements: "Windows 10+, macOS 10.13+",
    category: "Дизайн",
    image: "/images/figma.png",
    downloadUrl: "https://www.figma.com/",
    features: [
      "Совместная работа в реальном времени",
      "Векторные инструменты",
      "Прототипирование",
      "Компонентная система",
      "Автолейауты",
      "Плагины и интеграции",
    ],
  },
  // Тестирование
  postman: {
    name: "Postman",
    description: "Платформа для тестирования API с удобным интерфейсом и мощными возможностями автоматизации.",
    fullDescription:
      "Postman — это платформа API для создания и использования API. Postman упрощает каждый этап жизненного цикла API и оптимизирует совместную работу, чтобы вы могли создавать лучшие API быстрее.",
    version: "10.20.7",
    size: "142.8 MB",
    requirements: "Windows 10+, macOS 10.12+, Linux",
    category: "Тестирование",
    image: "/images/postman.png",
    downloadUrl: "https://www.postman.com/",
    features: [
      "Тестирование REST и GraphQL API",
      "Автоматизация тестов",
      "Мониторинг API",
      "Документация API",
      "Совместная работа команды",
      "Коллекции запросов",
    ],
  },
  // Фреймворки
  react: {
    name: "React",
    description: "JavaScript библиотека для создания пользовательских интерфейсов",
    fullDescription:
      "React — это JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. React разработан Facebook и позволяет создавать большие веб-приложения, которые могут изменять данные без перезагрузки страницы.",
    version: "18.2.0",
    size: "Веб-библиотека",
    requirements: "Node.js 14+",
    category: "Фреймворки JavaScript",
    image: "/images/react.png",
    downloadUrl: "https://reactjs.org/",
    features: [
      "Компонентная архитектура",
      "Виртуальный DOM",
      "JSX синтаксис",
      "Хуки",
      "Большая экосистема",
      "Активное сообщество",
    ],
  },
  // CMS
  wordpress: {
    name: "WordPress",
    description: "Популярная система управления контентом для создания сайтов",
    fullDescription:
      "WordPress — это система управления содержимым сайта с открытым исходным кодом, написанная на PHP и использующая в качестве базы данных MySQL. Сфера применения — от блогов до сложных новостных ресурсов и интернет-магазинов.",
    version: "6.4.2",
    size: "19.1 MB",
    requirements: "PHP 7.4+, MySQL 5.7+",
    category: "CMS/Движки",
    image: "/images/wordpress.png",
    downloadUrl: "https://wordpress.org/",
    features: [
      "Простота использования",
      "Тысячи тем и плагинов",
      "SEO-оптимизация",
      "Мультисайтовость",
      "Безопасность",
      "Активное сообщество",
    ],
  },
}

interface PageProps {
  params: {
    id: string
  }
}

export default function DownloadPage({ params }: PageProps) {
  const program = programsData[params.id as keyof typeof programsData]

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

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                    <Image
                      src={program.image || "/placeholder.svg"}
                      alt={program.name}
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-2xl">{program.name}</CardTitle>
                      <Badge variant="secondary">{program.category}</Badge>
                    </div>
                    <CardDescription className="text-base">{program.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Подробное описание</h3>
                    <p className="text-gray-600 leading-relaxed">{program.fullDescription}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Основные возможности</h3>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {program.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Скачать программу</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full" size="lg" asChild>
                  <a href={program.downloadUrl} target="_blank" rel="noopener noreferrer">
                    <Download className="h-5 w-5 mr-2" />
                    Скачать {program.name}
                  </a>
                </Button>

                <div className="text-center">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/info/${params.id}`}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Подробная информация
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Системные требования
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Monitor className="h-4 w-4 text-gray-500" />
                  <div>
                    <div className="font-medium text-sm">Операционная система</div>
                    <div className="text-sm text-gray-600">{program.requirements}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <HardDrive className="h-4 w-4 text-gray-500" />
                  <div>
                    <div className="font-medium text-sm">Размер файла</div>
                    <div className="text-sm text-gray-600">{program.size}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="text-xs">
                    Версия {program.version}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
