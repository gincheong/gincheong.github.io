# Markdown -> HTML 변환 스크립트를 이용한 Github Pages

[https://gincheong.github.io](https://gincheong.github.io)

## Post-Commit Hook을 이용하여 변환 스크립트 자동 실행 처리 적용

```sh
# .git/hooks/post-commit
# 권한 설정 필요
# chmod +x .git/hooks/post-commit

echo "Running post-commit Hook"
echo "Running yarn start (md to html)"
yarn start

# Git 상태 확인 (변경된 파일이 있는지 체크)
if [ -n "$(git status --porcelain)" ]; then
  echo "Changes detected, committing..."
  git add articles/*.html articles/**/*.html

  git commit -m "Automated changes by post-commit Hook"

  echo "Generated files committed by post-commit hook."
else
  echo "No changes to commit. Skipping commit."
fi

```
