"use client"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Shield, ArrowRight } from "lucide-react"
import { toast } from "sonner"

interface VoteModalProps {
  candidate: any
  open: boolean
  onOpenChange: (open: boolean) => void
  onConfirm: () => void
}

export function VoteModal({ candidate, open, onOpenChange, onConfirm }: VoteModalProps) {
  const handleConfirm = async () => {
    try {
      // Simulating blockchain transaction
      toast.loading("Processando transação na blockchain...")

      await new Promise((resolve) => setTimeout(resolve, 2000))

      onConfirm()
      toast.success(`Voto em ${candidate?.name} registrado com sucesso! ✅`)
      onOpenChange(false)
    } catch (error) {
      toast.error("Erro ao processar voto")
      console.error(error)
    }
  }

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="max-w-md">
        <AlertDialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <AlertDialogTitle>Confirmar Voto</AlertDialogTitle>
          </div>
          <AlertDialogDescription className="text-base">
            Você está prestes a votar em <span className="font-semibold text-foreground">{candidate?.name}</span> e
            enviar <span className="font-semibold text-primary">0.025 ETH</span> através da blockchain.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-xs font-bold text-primary mt-0.5">1</span>
            <div>
              <p className="text-sm font-semibold text-foreground">Transação Segura</p>
              <p className="text-xs text-muted-foreground">Protegida pela rede Ethereum</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xs font-bold text-primary mt-0.5">2</span>
            <div>
              <p className="text-sm font-semibold text-foreground">Transparência Total</p>
              <p className="text-xs text-muted-foreground">Seu voto é registrado de forma imutável</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xs font-bold text-primary mt-0.5">3</span>
            <div>
              <p className="text-sm font-semibold text-foreground">Valor: 0.025 ETH</p>
              <p className="text-xs text-muted-foreground">Será cobrado para validar seu voto</p>
            </div>
          </div>
        </div>

        <AlertDialogFooter className="gap-3">
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleConfirm}
            className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
          >
            Confirmar Voto
            <ArrowRight className="h-4 w-4" />
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
