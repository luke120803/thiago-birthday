import os
from PIL import Image


def otimizar_fotos(input_dir, output_dir, size=(800, 800)):
    # Cria a pasta de saída se não existir
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    for filename in os.listdir(input_dir):
        if filename.lower().endswith((".jpg", ".jpeg", ".webp", ".png")):
            path = os.path.join(input_dir, filename)

            with Image.open(path) as img:
                # Converte para RGB (remove canal alpha se for salvar em JPEG,
                # mas WebP aceita transparência)
                img = img.convert("RGB")

                # Redimensiona mantendo o aspecto (importante para não achatar os amigos)
                img.thumbnail(size)

                # Nome do arquivo de saída (trocando a extensão para .jpeg)
                nome_sem_ext = os.path.splitext(filename)[0]
                output_path = os.path.join(output_dir, f"{nome_sem_ext}.jpeg")

                # Salva com compressão otimizada
                img.save(output_path, "JPEG", quality=95)
                print(f"✅ {filename} -> {nome_sem_ext}.jpeg (Otimizado)")

pasta_entrada = "fotos_originais"

# Saída: vamos salvar os arquivos .jpeg otimizados direto na pasta public do seu app
pasta_saida = "client/public"

otimizar_fotos(pasta_entrada, pasta_saida)