# Markdown -> HTML 변환 스크립트를 이용한 Github Pages

[https://gincheong.github.io](https://gincheong.github.io)

## Post-Commit Hook을 이용하여 변환 스크립트 자동 실행 처리 적용

`.git/hooks/post-commit`

```sh
# 권한 설정 필요
# chmod +x .git/hooks/post-commit

# GIT_NO_POSTCOMMIT 환경 변수가 설정되어 있으면 post-commit 훅을 실행하지 않음
if [ "$GIT_NO_POSTCOMMIT" = "1" ]; then
  echo "Skipping post-commit hook to prevent infinite loop."
  exit 0
fi

echo "Running post-commit Hook"
echo "Make HTML, Sitemap"
yarn make-html
yarn make-sitemap

# Git 상태 확인 (변경된 파일이 있는지 체크)
if [ -n "$(git status --porcelain)" ]; then
  echo "Changes detected, committing..."
  git add sitemap.xml articles/*.html articles/**/*.html

  # post-commit 재실행 방지
  GIT_NO_POSTCOMMIT=1 git commit -m "Automated changes by post-commit Hook"

  echo "Generated files committed by post-commit hook."
else
  echo "No changes to commit. Skipping commit."
fi

```
