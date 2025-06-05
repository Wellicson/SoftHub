"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Search,
  Menu,
  Download,
  ChevronDown,
  Server,
  Database,
  Code,
  Palette,
  TestTube,
  FileText,
  Globe,
  Wrench,
} from "lucide-react"
import { useState } from "react"

const categories = [
  { id: "servers", title: "Сервера", icon: Server },
  { id: "database", title: "СУБД", icon: Database },
  { id: "programming", title: "Программирование", icon: Code },
  { id: "design-modeling", title: "Проектирование", icon: Wrench },
  { id: "design", title: "Дизайн", icon: Palette },
  { id: "frameworks", title: "Фреймворки JavaScript", icon: Code },
  { id: "presentation", title: "Презентации", icon: FileText },
  { id: "specialized-tools", title: "Специализированные инструменты", icon: Wrench },
  { id: "online-platforms", title: "Онлайн-платформы", icon: Globe },
  { id: "testing", title: "Тестирование", icon: TestTube },
  { id: "office", title: "Офис", icon: FileText },
  { id: "cms", title: "CMS/Движки", icon: Globe },
]

interface HeaderProps {
  onSearch?: (query: string) => void
  onCategorySelect?: (categoryId: string | null) => void
}

export function Header({ onSearch, onCategorySelect }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    onSearch?.(query)
  }

  const handleCategoryClick = (categoryId: string) => {
    onCategorySelect?.(categoryId)
    // Прокрутка к соответствующей секции
    const element = document.getElementById(categoryId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleLogoClick = () => {
    // Прокрутка к началу и сброс фильтров
    window.scrollTo({ top: 0, behavior: "smooth" })
    onCategorySelect?.(null)
    setSearchQuery("")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 backdrop-blur supports-[backdrop-filter]:bg-gradient-to-r supports-[backdrop-filter]:from-slate-900/95 supports-[backdrop-filter]:via-blue-900/95 supports-[backdrop-filter]:to-slate-900/95">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-3 group" onClick={handleLogoClick}>
            <div className="relative">
              {/* Simplified SVG Logo */}
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:scale-110"
              >
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#1D4ED8" />
                    <stop offset="100%" stopColor="#1E40AF" />
                  </linearGradient>
                </defs>

                {/* Simple circle background */}
                <circle cx="20" cy="20" r="18" fill="url(#logoGradient)" stroke="#FFFFFF" strokeWidth="2" />

                {/* Simple code icon */}
                <path
                  d="M14 12L8 20L14 28"
                  stroke="#FFFFFF"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M26 12L32 20L26 28"
                  stroke="#FFFFFF"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M22 10L18 30" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                SoftHub
              </span>
              <span className="text-xs text-blue-200/80 font-medium tracking-wide">SOFTWARE CENTER</span>
            </div>
          </Link>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Поиск программ..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-4 bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:bg-white/20 focus:border-blue-400 transition-all duration-200"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {/* Categories Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10 font-medium">
                  Категории
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 bg-white border border-gray-200 shadow-lg">
                {categories.map((category) => {
                  const IconComponent = category.icon
                  return (
                    <DropdownMenuItem
                      key={category.id}
                      onClick={() => handleCategoryClick(category.id)}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 cursor-pointer"
                    >
                      <IconComponent className="h-4 w-4 text-blue-600" />
                      <span className="text-gray-700">{category.title}</span>
                    </DropdownMenuItem>
                  )
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            {/* Mobile Search Button */}
            <Button variant="ghost" size="sm" className="md:hidden text-white hover:bg-white/10">
              <Search className="h-4 w-4" />
            </Button>

            {/* Download Stats */}
            <div className="hidden sm:flex items-center space-x-2 px-3 py-1 bg-white/10 rounded-full">
              <Download className="h-4 w-4 text-blue-400" />
              <span className="text-sm text-white font-medium">1M+</span>
            </div>

            {/* Mobile Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden text-white hover:bg-white/10">
                  <Menu className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border border-gray-200 shadow-lg lg:hidden">
                {categories.map((category) => {
                  const IconComponent = category.icon
                  return (
                    <DropdownMenuItem
                      key={category.id}
                      onClick={() => handleCategoryClick(category.id)}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 cursor-pointer"
                    >
                      <IconComponent className="h-4 w-4 text-blue-600" />
                      <span className="text-gray-700">{category.title}</span>
                    </DropdownMenuItem>
                  )
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Поиск программ..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-4 bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:bg-white/20 focus:border-blue-400"
            />
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
    </header>
  )
}
