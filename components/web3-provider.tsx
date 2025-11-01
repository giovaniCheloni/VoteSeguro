"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { toast } from "sonner"

interface Web3ContextType {
  connected: boolean
  address: string
  isLoading: boolean
  connectMetaMask: () => Promise<void>
}

const Web3Context = createContext<Web3ContextType | undefined>(undefined)

export function useWeb3() {
  const context = useContext(Web3Context)
  if (context === undefined) {
    throw new Error("useWeb3 must be used within a Web3Provider")
  }
  return context
}

interface Web3ProviderProps {
  children: ReactNode
}

export function Web3Provider({ children }: Web3ProviderProps) {
  const [connected, setConnected] = useState(false)
  const [address, setAddress] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)

  const connectMetaMask = async () => {
    if (typeof window === "undefined" || !window.ethereum) {
      toast.error("MetaMask não está instalada.", {
        action: {
          label: "Instalar",
          onClick: () => window.open("https://metamask.io/download/", "_blank"),
        },
      })
      return
    }

    try {
      setIsLoading(true)
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      })

      setAddress(accounts[0])
      setConnected(true)
      toast.success(`Conectado: ${accounts[0].slice(0, 6)}...${accounts[0].slice(-4)}`)
    } catch (error) {
      toast.error("Falha ao conectar MetaMask")
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const value: Web3ContextType = {
    connected,
    address,
    isLoading,
    connectMetaMask,
  }

  return <Web3Context.Provider value={value}>{children}</Web3Context.Provider>
}

declare global {
  interface Window {
    ethereum?: any
  }
}
