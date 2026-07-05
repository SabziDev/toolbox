alias i="npm i"
alias run="npm run dev"
alias iRun="i && run"
alias build="npm run build && preview"
alias preview="npm run preview"

alias lint="npm run lint"
alias lintFix="npm run lint:fix"

#? --------------------------------------------------------------------------------------------------------
# ---------------------------- - ALL - ----------------------------
alias iVPSH="npm i -D vite-plugin-simple-html"
alias iEL="npm i -D @fullstacksjs/eslint-config eslint prettier eslint-plugin-unicorn"
alias iT="npm i tailwindcss @tailwindcss/vite"

alias iS="npm i swiper && run"
alias iA="npm i axios && run"
alias iZ="npm i zod && run"
# ---------------------------- - PURE - ----------------------------
alias iSA2="npm i sweetalert2 && run"
# -------- TS --------
# ---------------------------- - REACT - ----------------------------
alias iBPRC="npm i -D babel-plugin-react-compiler@latest @rolldown/plugin-babel"
alias iC="npm i clsx && run"

alias iRR="npm i react-router"
alias iRTLB="npm i react-top-loading-bar"
alias iFM="npm i framer-motion"

alias iRI="npm i react-icons && run"
alias iRHT="npm i react-hot-toast && run"
alias iRQ="npm i @tanstack/react-query && run"
alias iRHF="npm i react-hook-form @hookform/resolvers && run"
alias iRQAZ="npm i @tanstack/react-query && iA && iZ && run"
# -------- TS --------
#? --------------------------------------------------------------------------------------------------------

alias iJPA="iVPSH && \
  iEL && \
  iT"

alias iRPA="iVPSH && \
  iEL && \
  iT && \
  iBPRC"

alias iRPAA="iVPSH && \
  iEL && \
  iT && \
  iBPRC && \
  iRR && \
  iRTLB && \
  iFM"

#! --------------------------------------------------------------------------------------------------------
jsTemplate() {
  # Delete everything except a few items!
  find . -maxdepth 1 \
    ! -name "." \
    ! -name "package.json" \
    ! -name "package-lock.json" \
    ! -name ".gitignore" \
    -exec rm -rf {} +

  # Copy new template!
  cp -rf "B:/Programming/toolbox/SOURCE-TEMPLATES/VANILLA/PROJECTNAME--js/." .

  # Add EsLint scripts!
  npm pkg set scripts.lint="eslint" scripts.lint:fix="eslint --fix"
}
alias js="npm create vite@latest . -- --template vanilla --no-immediate && jsTemplate && i && iJPA && code . && exit"
# -------------------------------------------
reactTemplate() {
  # Delete everything except a few items!
  find . -maxdepth 1 \
    ! -name "." \
    ! -name "package.json" \
    ! -name "package-lock.json" \
    ! -name ".gitignore" \
    -exec rm -rf {} +

  # Copy new template!
  cp -rf "B:/Programming/toolbox/SOURCE-TEMPLATES/LIBS/REACT/PROJECTNAME--pure/." .

  # Delete default EsLint and its scripts. Then, add EsLint scripts!
  npm rm oxlint && npm pkg delete scripts.lint && npm pkg set scripts.lint="eslint" scripts.lint:fix="eslint --fix"
}
alias reactWA="npm create vite@latest . -- --template react --no-immediate && reactTemplate && i && iRPA && code . && exit"
alias react="npm create vite@latest . -- --template react --no-immediate && reactTemplate && i && iRPAA && code . && exit"
#! --------------------------------------------------------------------------------------------------------

export HISTSIZE=10000
export HISTFILESIZE=10000
export PROMPT_COMMAND="history -a; ${PROMPT_COMMAND}"
