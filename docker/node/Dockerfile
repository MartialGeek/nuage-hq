FROM node:8.0

VOLUME /app
COPY . /app
WORKDIR /app

EXPOSE 8000

COPY ./docker/node/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
CMD ["npm", "start"]
