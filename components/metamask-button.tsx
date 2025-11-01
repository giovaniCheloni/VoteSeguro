"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Wallet } from "lucide-react"
import { toast } from "sonner"

export function MetaMaskButton() {
  const [connected, setConnected] = useState(false)
  const [address, setAddress] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)

  const connectMetaMask = async () => {
    if (typeof window === "undefined" || !window.ethereum) {
      toast.error("MetaMask não está instalada. Por favor, instale-a para continuar.")
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

  return (
    <Button
      onClick={connectMetaMask}
      disabled={isLoading}
      variant={connected ? "default" : "outline"}
      className="gap-2"
    >
      <Wallet className="h-4 w-4" />
      {isLoading ? "Conectando..." : connected ? `${address.slice(0, 6)}...${address.slice(-4)}` : "Conectar MetaMask"}
    </Button>
  )
}

declare global {
  interface Window {
    ethereum?: any
  }
}
