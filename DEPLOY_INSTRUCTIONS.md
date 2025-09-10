# 🚀 Instruções para Deploy no GitHub Pages

## Problema Identificado
O GitHub Pages está exibindo página em branco porque projetos React precisam ser compilados para produção.

## Solução

### 1. **Habilitar Execução de Scripts no PowerShell**
Execute este comando no PowerShell como Administrador:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### 2. **Instalar Dependências**
```bash
npm install
```

### 3. **Fazer Build do Projeto**
```bash
npm run build
```

### 4. **Configurar GitHub Pages**

#### Opção A: Deploy Manual
1. Vá em **Settings** do seu repositório no GitHub
2. Clique em **Pages** no menu lateral
3. Em **Source**, selecione **Deploy from a branch**
4. Selecione **main** como branch
5. Selecione **/ (root)** como pasta
6. Clique em **Save**

#### Opção B: Deploy Automático (Recomendado)
1. O arquivo `.github/workflows/deploy.yml` já foi criado
2. Faça commit e push das alterações:
```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```
3. Vá em **Actions** no seu repositório
4. Aguarde o workflow completar
5. Vá em **Settings** → **Pages**
6. Selecione **GitHub Actions** como source

### 5. **Verificar Deploy**
- Acesse: `https://canacruz.github.io/CP03-Web/`
- A aplicação deve carregar normalmente

## Arquivos Configurados

✅ **vite.config.js** - Configurado com base path `/CP03-Web/`  
✅ **.github/workflows/deploy.yml** - Workflow de deploy automático  
✅ **.gitignore** - Arquivos ignorados pelo Git  

## Troubleshooting

Se ainda estiver em branco:
1. Verifique se o build foi executado com sucesso
2. Confirme se a pasta `dist` foi criada
3. Verifique os logs do GitHub Actions
4. Aguarde alguns minutos para o cache atualizar

## Comandos Rápidos

```bash
# Instalar dependências
npm install

# Build para produção
npm run build

# Preview local do build
npm run preview

# Desenvolvimento local
npm run dev
```
