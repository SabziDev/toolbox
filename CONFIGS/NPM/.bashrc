alias n="npm"
alias p="pnpm"

alias i="p i"
alias run="p dev"
alias iRun="i && run"
alias preview="p preview"
alias build="p build && preview"

alias lint="p lint"
alias lintFix="p lint:fix"
alias emptyD="find . -type d -empty"

alias optimize="p optimize"

#? --------------------------------------------------------------------------------------------------------
# ---------------------------- - ALL - ----------------------------
alias iVPSH="p i -D vite-plugin-simple-html"
alias iEL="p i -D @fullstacksjs/eslint-config eslint prettier eslint-plugin-unicorn"
alias iT="p i tailwindcss @tailwindcss/vite"

alias iS="p i swiper && run"
alias iA="p i axios && run"
alias iZ="p i zod && run"
# ---------------------------- - PURE - ----------------------------
alias iSA2="p i sweetalert2 && run"
# -------- TS --------
# ---------------------------- - REACT - ----------------------------
alias iBPRC="p i -D babel-plugin-react-compiler@latest @rolldown/plugin-babel"
alias iC="p i clsx && run"

alias iRR="p i react-router"
alias iFM="p i framer-motion"

alias iRI="p i react-icons && run"
alias iRHT="p i react-hot-toast && run"
alias iRS="p i react-spinners && run"
alias iRQ="p i @tanstack/react-query && run"
alias iRHF="p i react-hook-form @hookform/resolvers && run"
alias iRQA="p i @tanstack/react-query axios zod react-hook-form @hookform/resolvers react-hot-toast react-spinners && run"
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
    ! -name "pnpm-lock.yaml" \
    ! -name "pnpm-workspace.yaml" \
    ! -name ".gitignore" \
    -exec rm -rf {} +

  # Copy new template!
  cp -rf "B:/Programming/toolbox/SOURCE-TEMPLATES/VANILLA/PROJECTNAME--js/." .

  # Add EsLint scripts!
  p pkg set scripts.lint="eslint" scripts.lint:fix="eslint --fix"
}
alias js="p create vite@latest . -- --template vanilla --no-immediate && jsTemplate && i && iJPA && code . && exit"
# -------------------------------------------
reactTemplate() {
  # Delete everything except a few items!
  find . -maxdepth 1 \
    ! -name "." \
    ! -name "package.json" \
    ! -name "pnpm-lock.yaml" \
    ! -name "pnpm-workspace.yaml" \
    ! -name ".gitignore" \
    -exec rm -rf {} +

  # Copy new template!
  cp -rf "B:/Programming/toolbox/SOURCE-TEMPLATES/LIBS/REACT/PROJECTNAME--pure/." .

  # Delete default EsLint and its scripts. Then, add EsLint scripts!
  p rm oxlint && p pkg delete scripts.lint && p pkg set scripts.lint="eslint" scripts.lint:fix="eslint --fix"
}
alias reactWA="p create vite@latest . -- --template react --no-immediate && reactTemplate && i && iRPA && code . && exit"
alias react="p create vite@latest . -- --template react --no-immediate && reactTemplate && i && iRPAA && code . && exit"
#! --------------------------------------------------------------------------------------------------------

export HISTSIZE=10000
export HISTFILESIZE=10000
export PROMPT_COMMAND="history -a; ${PROMPT_COMMAND}"
