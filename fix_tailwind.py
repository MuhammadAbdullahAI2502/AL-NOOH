from pathlib import Path
import re
root = Path('src')
patterns = {
    r'bg-gradient-to-r': 'bg-linear-to-r',
    r'bg-gradient-to-l': 'bg-linear-to-l',
    r'bg-gradient-to-t': 'bg-linear-to-t',
    r'bg-gradient-to-b': 'bg-linear-to-b',
    r'bg-gradient-to-br': 'bg-linear-to-br',
    r'aspect-\[4/3\]': 'aspect-4/3',
    r'aspect-\[3/2\]': 'aspect-3/2',
    r'rounded-\[2rem\]': 'rounded-4xl',
    r'h-\[320px\]': 'h-80',
    # Tailwind v4 permits custom gradient syntax as direct string; this correction avoids parser warnings
    r'bg-\[radial-gradient\(circle_at_top_left,_rgba\(225,193,108,0\.32\),_transparent_35%\)\]': 'bg-[radial-gradient(circle_at_top_left,rgba(225,193,108,0.32),transparent_35%)]',
}
modified = []
for path in root.rglob('*.tsx'):
    text = path.read_text(encoding='utf-8')
    new_text = text
    for pat, repl in patterns.items():
        new_text = re.sub(pat, repl, new_text)
    if new_text != text:
        path.write_text(new_text, encoding='utf-8')
        modified.append(str(path))
print('Modified files:')
for p in modified:
    print(p)
