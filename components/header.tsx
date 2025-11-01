"use client"

import { ThemeToggle } from "./theme-toggle"
import { MetaMaskButton } from "./metamask-button"
import { Shield, ExternalLink } from "lucide-react"

export function Header() {
  const handleViewContract = () => {
    window.open("https://etherscan.io/", "_blank")
  }

  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary rounded-lg">
            <Shield className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Vote-Seguro</h1>
            <p className="text-sm text-muted-foreground">Votação Transparente & Segura</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleViewContract}
            className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors duration-200 border border-primary/30 hover:border-primary/50"
          >
            <ExternalLink className="h-4 w-4" />
            <span className="text-sm font-medium">Ver Contratos</span>
          </button>
          <MetaMaskButton />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
